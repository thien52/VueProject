<template>
    <el-card class="card-sanpham" shadow="hover"  > 
    <template #header>
      <div class="tensanpham" >
       {{ SudesNestProps.name}}
      </div> 
    </template>
    <div class="img-card">
    <img :src="SudesNestProps.image"
      style="width: 100%; object-fit: cover"  />

    </div>
    <template #footer>
      <div class="footer-sanpham" >  
        <el-button type="success" size="default" >
        Thêm vào giỏ hàng
        <el-icon style="margin-left: 2px; font-size: 16px;" ><ShoppingCart />
        </el-icon>
    </el-button>  
    <el-popover placement="right" :width="400" trigger="click" >
      <template #reference>
          <el-tag type="success" effect="dark" round style=" cursor: pointer;">Xem thêm</el-tag>
      </template>
       <div> 
      <el-col style="font-size: large; font-family: Aria; line-height: 1.5;margin: 4px; ">
      <h2 style="color:#126644 ;">{{ SudesNestProps.name}}</h2>
      <el-text> Thương Hiệu: {{ SudesNestProps.brand}}</el-text><br />
      <el-text> Tình trạng: {{ SudesNestProps.status}}</el-text><br />
      <el-text>Mô tả: {{ SudesNestProps.describe}}</el-text><br />
    </el-col>

       </div>
    </el-popover>
    
      </div>
    </template>
    
  </el-card>
</template>

<script>
export default {
name: 'SudesNestItem',
props: {
    // Định nghĩa prop 'item' để nhận dữ liệu sản phẩm
    SudesNestProps: {
      type: Object,
      required: true,
      }
  },
    
}
</script>

<style scoped>
.card-sanpham {
  width: 320px;
  margin: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tensanpham {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: #333;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 1.2;
}
.img-card {
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: transform 0.3s ease;
   cursor: pointer;
}
.img-card :hover {
 transform: scale(1.05);
}
.card-sanpham .footer-sanpham {
  height: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
  
}.card-sanpham .footer-sanpham .el-button:hover,
.card-sanpham .footer-sanpham .el-tag:hover {
  background-color: #126644 ;
  color: #fff;
}
</style>