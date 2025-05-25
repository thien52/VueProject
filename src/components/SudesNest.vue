<template>
    <el-container>
      <el-header style="
      top: 0;">
    <el-button plain icon="ArrowLeftBold" > </el-button>
    <el-text style="color: aliceblue; font-size: 20px; " > SudesNest</el-text>
    <el-input
      v-model="input3" clearable 
      style="max-width: 600px"
      placeholder="Tìm kiếm......"
      class="input-with-select"
      @keyup.enter="onEnter"
    >
      <template #append>
        <el-button type="primary" icon="Search" @click="onEnter"></el-button>
      </template>
    </el-input>

      <div class="button-group" >
       <span class="clickable-icon" @click="onChatClick">
          <el-icon><ChatDotSquare /></el-icon>
        </span>
        <span class="clickable-icon" @click="onBellClick">
          <el-icon><Bell /></el-icon>
        </span>
        <span class="clickable-icon" @click="onCartClick">
          <el-icon><ShoppingCartFull /></el-icon>
        </span>
        </div>
      </el-header>
      
      <el-main >
        <div >
    <el-carousel height="320px">
    <el-carousel-item
      v-for="(image, index) in images"
      :key="index"
      :style="{ backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
       }">
    </el-carousel-item>
    </el-carousel>
    </div>
    <div class="sudes-nest-product">
      <SudesNestItem 
       v-for="product in products"
      :key="product.id"
      :SudesNestProps="product" />
</div>
      </el-main>

 <div class="app-footer">
  <el-row justify="space-around" :gutter="20">
    <!-- Cột 1: Thông tin công ty -->
    <el-col :xs="24" :sm="12" :md="8">
      <h4>Thông tin công ty</h4>
      <el-text>© 2023 Tên Công ty của Bạn.</el-text><br />
      <el-text>Địa chỉ: Tên Đường, Tỉnh/Thành phố, Quốc gia</el-text><br />
      <el-text>Hotline: 0987654321</el-text><br />
      <el-text>Email: info@tencongty.com</el-text><br />
    </el-col>

    <!-- Cột 2: Liên kết nhanh -->
    <el-col :xs="24" :sm="12" :md="8">
      <h4>Liên kết nhanh</h4>
      <el-link href="/">Trang chủ</el-link><br />
      <el-link href="/ve-chung-toi">Về chúng tôi</el-link><br />
      <el-link href="/dich-vu">Dịch vụ</el-link><br />
      <el-link href="/lien-he">Liên hệ</el-link>
    </el-col>

    <!-- Cột 3: Mạng xã hội -->
    <el-col :xs="24" :sm="24" :md="8">
      <h4>Kết nối với chúng tôi</h4>
      <el-link  href="https://facebook.com" target="_blank">Facebook</el-link><br />
      <el-link  href="https://twitter.com" target="_blank">Twitter</el-link><br />
      <el-link  href="https://instagram.com" target="_blank">Instagram</el-link>
    </el-col>
  </el-row>
</div>
    </el-container>
</template>


<script>
import { ref } from 'vue'
import SudesNestItem from './SudesNestItem.vue' 


export default {
  name: 'SudesNest',
  components: {
    SudesNestItem,
  },
  setup() {
    const input3 = ref('')
    
    const onEnter = () => {
      input3.value = ''
    }

    const onChatClick = () => {
      alert('Chat clicked!')
    }

    const onBellClick = () => {
      alert('Notification clicked!')
    }

    const onCartClick = () => {
      alert('Cart clicked!')
    }
    const images = [
  'https://bizweb.dktcdn.net/100/506/650/themes/944598/assets/slider_1.jpg?1739018973665',
  'https://bizweb.dktcdn.net/100/506/650/themes/944598/assets/slider_2.jpg?1739018973665',
  'https://bizweb.dktcdn.net/100/506/650/themes/944598/assets/slider_3.jpg?1739018973665',
];

const products = ref ([
          {
          id: 1,
          name: 'Tổ Yến Tinh Chế cho bé BaBy',
          brand: 'Yến Chưng Minh',
          status: 'Còn hàng',
          describe :'Tổ yến tinh chế cho bé baby 2 đã được xử lý làm sạch, phồng, trắng nhưng vẫn giữ nguyên được giá trị dinh dưỡng.',
          image: 'https://bizweb.dktcdn.net/100/506/650/products/bb2-50gr-0-nap-494df53fb54c4233b0ba3c0a8ab3dfbe-97fc1701b8a14297ac03ee1e64edf1b2-master-d488b4d7-4784-48b2-a54a-c7d6343654fa.jpg?v=1709574876467'
        },
        {
          id: 2,
          name: 'Tổ yến tinh chế VIP độc quyền',
          brand: 'Yến Chưng Minh',
          status: 'Còn hàng',
          describe :'Tổ yến tinh chế cho bé baby 2 đã được xử lý làm sạch, phồng, trắng nhưng vẫn giữ nguyên được giá trị dinh dưỡng.',

          image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/506/650/products/tinh-che-1-1-d99b81cee6fe48febfc5ab4720d4fdff-master.jpg?v=1708394959627'
        },
        {
          id: 3,
          name: 'Tổ yến thô Nha Trang VIP',
          brand: 'Yến Nha Trang',
          status: 'Hết hàng',
          describe :'Tổ yến tinh chế cho bé baby 2 đã được xử lý làm sạch, phồng, trắng nhưng vẫn giữ nguyên được giá trị dinh dưỡng.',
          image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/506/650/products/yt2-100gr-0-nap-396942d0656748e4a2d17289a19bec65-46c17667302545b6b6491d68c21a7fa6-master.jpg?v=1708393264457'
      
        },
        {
          id: 4,
          name: 'Yến Chưng Minh Nhãn Yến',
          brand: 'Yến Chưng Minh',
          status: 'Còn hàng',
          describe :'Tổ yến tinh chế cho bé baby 2 đã được xử lý làm sạch, phồng, trắng nhưng vẫn giữ nguyên được giá trị dinh dưỡng.',
          image: 'https://bizweb.dktcdn.net/100/506/650/products/333266375-748360146610796-7320942949504932728-n-2e04671f6dc64424820e6af48182c94a-master-1.jpg?v=1703956255737'     
        },
        {
          id: 5,
          name: 'Thượng Vy Yến biển ',
          brand: 'Thượng Vy Yến',
          status: 'Hết hàng',
          describe :'Tổ yến tinh chế cho bé baby 2 đã được xử lý làm sạch, phồng, trắng nhưng vẫn giữ nguyên được giá trị dinh dưỡng.',
          image: 'https://bizweb.dktcdn.net/thumb/large/100/506/650/products/2-0585abb0-850c-47ca-aede-6581b9a38259.jpg?v=1708619031057'
        },
        {
          id: 6,
          name: 'Set 24 Thượng Vy Yến Đảo',
          brand: 'Thượng Vy Yến',
          status: 'Còn hàng',
          describe :'Tổ yến tinh chế cho bé baby 2 đã được xử lý làm sạch, phồng, trắng nhưng vẫn giữ nguyên được giá trị dinh dưỡng.',
          image: 'https://bizweb.dktcdn.net/thumb/large/100/506/650/products/set-24-thuong-vy-yen-dao.jpg?v=1708618368890'
        },
        {
          id: 7,
          name: 'Set 12 Thượng Vy Yến Đảo',
          brand: 'Thượng Vy Yến',
          status: 'Hết hàng',
          describe :'Tổ yến tinh chế cho bé baby 2 đã được xử lý làm sạch, phồng, trắng nhưng vẫn giữ nguyên được giá trị dinh dưỡng.',
          image: 'https://bizweb.dktcdn.net/thumb/large/100/506/650/products/set-12-thuong-vy-yen-dao.jpg?v=1708618562223'
        },
        {
          id: 8,
          name: 'Set 6 Thượng Vy Yến Đảo',
          brand: 'Thượng Vy Yến',
          status: 'Còn hàng',
          describe :'Tổ yến tinh chế cho bé baby 2 đã được xử lý làm sạch, phồng, trắng nhưng vẫn giữ nguyên được giá trị dinh dưỡng.',
          image: 'https://bizweb.dktcdn.net/100/506/650/products/set-6-thuong-vy-yen-dao.jpg?v=1708618693627'
        },
        {
          id: 9,
          name: 'Thượng Vy Yến đảo Đông trùng hạ thảo',
          brand: 'Thượng Vy Yến',
          status: 'Hết hàng',
          describe :'Tổ yến tinh chế cho bé baby 2 đã được xử lý làm sạch, phồng, trắng nhưng vẫn giữ nguyên được giá trị dinh dưỡng.',
          image: 'https://bizweb.dktcdn.net/100/506/650/products/1.jpg?v=1708616531780'
        },
        
  ]) 
    return {
      input3,
      onEnter,
      onChatClick,
      onBellClick,
      onCartClick,
      images,
      products
      
    }

  },
  
  
}
</script>

<style scoped>
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  background-color:#126644;
  color: #333;
  text-align: center;
}
.button-group {
  display: flex;
  align-items: center;
}
.clickable-icon {
  cursor: pointer;
  transition: color 0.2s;
  font-size: 20px;
  margin: 8px;
  color: #fff; 
}
.clickable-icon:hover {
  color:rgb(159.5, 206.5, 255);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  
  
}

.sudes-nest-product {
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: space-evenly;
}
.app-footer {
  background-color: #f5f5f5;
  padding: 30px 10px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  color: #555;
}

h4 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.el-link {
  color: #409EFF;
  background-color: transparent !important;
  border: none !important;
}

.el-link:hover {
  cursor: pointer;
}
</style>