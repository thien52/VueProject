<script setup>
// Import ref để tạo biến phản ứng (reactive variable)
import { ref } from 'vue';

// Biến trạng thái để điều khiển việc hiển thị menu
const isMenuOpen = ref(false);

// Hàm để bật/tắt menu (toggle)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Hàm để đóng menu (ví dụ: khi click vào một link trong menu)
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <div id="app-container">
    <!-- Nút Toggle Menu (Hamburger/Close Icon) -->
    <button @click="toggleMenu" class="menu-toggle-btn">
      <span v-if="isMenuOpen">&#x2715;</span> <!-- Icon X (đóng) -->
      <span v-else>&#9776;</span> <!-- Icon Hamburger (mở) -->
    </button>

    <!-- Sidebar Menu với Transition -->
    <transition name="slide-menu">
      <aside v-if="isMenuOpen" class="sidebar">
        <nav class="main-nav">
          <router-link to="/" @click="closeMenu">Đến trang Welcome</router-link>
          <router-link to="/hello" @click="closeMenu">Đến trang HelloWorld</router-link>
          <!-- Thêm các link khác nếu cần -->
        </nav>
      </aside>
    </transition>

    <!-- Nội dung chính của trang -->
    <main class="main-content" :class="{ 'menu-open': isMenuOpen }">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
/* Layout tổng thể */
#app-container {
  position: relative; /* Cần cho việc định vị nút toggle nếu nó là absolute */
  min-height: 100vh; /* Đảm bảo container chiếm toàn bộ chiều cao viewport */
  overflow-x: hidden; /* Ngăn thanh cuộn ngang khi menu trượt */
}

/* Nút Toggle Menu */
.menu-toggle-btn {
  position: fixed; /* Giữ nút ở vị trí cố định khi cuộn trang */
  top: 15px;
  left: 15px;
  z-index: 1100; /* Đảm bảo nút nằm trên sidebar */
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px; /* Kích thước icon */
  line-height: 1; /* Căn chỉnh icon tốt hơn */
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: left 0.3s ease-in-out; /* Thêm transition cho nút nếu muốn nó di chuyển cùng menu */
}
/* Nếu bạn muốn nút toggle cũng di chuyển khi menu mở (ví dụ: để nó luôn ở cạnh menu) */
/*
#app-container.menu-is-open .menu-toggle-btn {
  left: 265px; // 250px (width of sidebar) + 15px (initial left)
}
*/


/* Sidebar Menu */
.sidebar {
  position: fixed; /* Cố định menu ở bên trái */
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px; /* Chiều rộng của menu */
  background-color: #f0f0f0;
  padding-top: 70px; /* Khoảng trống phía trên cho nút toggle hoặc header (nếu có) */
  box-shadow: 2px 0 5px rgba(0,0,0,0.1); /* Đổ bóng nhẹ cho menu */
  z-index: 1000; /* Đảm bảo menu nằm trên nội dung nhưng dưới nút toggle */
  /* transform và transition sẽ được xử lý bởi Vue transition classes */
  overflow-y: auto; /* Cho phép cuộn nếu nội dung menu dài */
}

.main-nav {
  display: flex;
  flex-direction: column; /* Các link menu xếp dọc */
}

.main-nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 15px 20px; /* Tăng padding cho dễ click */
  text-decoration: none;
  display: block; /* Để link chiếm toàn bộ chiều rộng */
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}

.main-nav a:hover {
  background-color: #e0e0e0;
  color: #36a374;
}

.main-nav a.router-link-exact-active {
  color: #42b983;
  background-color: #e9f5ee; /* Màu nền nhẹ cho link active */
}

/* Nội dung chính */
.main-content {
  padding: 20px;
  padding-top: 70px; /* Đảm bảo nội dung không bị che bởi nút toggle ban đầu */
  transition: margin-left 0.3s ease-in-out, padding-left 0.3s ease-in-out; /* Hiệu ứng mượt khi đẩy nội dung */
  margin-left: 0; /* Mặc định khi menu đóng */
  /* Nếu nút toggle không di chuyển, bạn có thể cần thêm padding-left khi menu đóng để nội dung không bị che */
  /* padding-left: 60px; */ /* Ví dụ: 15px (left của nút) + 30px (width nút) + 15px (khoảng cách) */
}

/* Khi menu mở, đẩy nội dung chính sang phải */
.main-content.menu-open {
  margin-left: 250px; /* Phải bằng với chiều rộng của sidebar */
  /* Nếu nút toggle không di chuyển, padding-left có thể giữ nguyên hoặc điều chỉnh nếu cần */
  /* padding-left: 20px; */ /* Reset padding-left nếu không cần nữa */
}

/* CSS cho Transition của Sidebar */
.slide-menu-enter-active,
.slide-menu-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-menu-enter-from,
.slide-menu-leave-to {
  transform: translateX(-100%); /* Menu bắt đầu từ ngoài màn hình bên trái */
}

.slide-menu-enter-to,
.slide-menu-leave-from { /* Trạng thái cuối khi vào hoặc trạng thái đầu khi ra */
  transform: translateX(0); /* Menu ở vị trí cuối cùng (hiển thị) */
}
</style>
