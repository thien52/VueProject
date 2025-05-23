import { createRouter, createWebHistory } from 'vue-router'
// Đảm bảo đường dẫn đến components của bạn là chính xác.
// Ví dụ: nếu HelloWorld.vue nằm trong src/components/HelloWorld.vue
import HelloWorld from '../components/HelloWorld.vue'
import TheWelcome from '../components/TheWelcome.vue' // Tương tự, kiểm tra đường dẫn cho TheWelcome.vue
import Login from '../components/Login.vue'

const routes = [
  {
    path: '/', // Route cho trang chủ, sẽ hiển thị TheWelcome
    name: 'Welcome',
    component: TheWelcome
  },
  {
    path: '/hello', // Route cho trang HelloWorld
    name: 'HelloWorld',
    component: HelloWorld
  },
  // Bạn có thể thêm các routes khác ở đây
   {
      path: '/login',
      name: 'Login',
      component: Login
    },

]

const router = createRouter({
  history: createWebHistory(), // Sử dụng createWebHistory() cho HTML5 history mode.
                               // Nếu ứng dụng của bạn không được phục vụ từ thư mục gốc của domain,
                               // bạn có thể cần truyền BASE_URL, ví dụ: createWebHistory(import.meta.env.BASE_URL) cho Vite.
  routes
})

export default router