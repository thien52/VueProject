<template>
<el-container>
  <el-header class="header-card">
  <el-icon class="icon-header"><Picture /></el-icon>
   <el-text>Hello World</el-text> 
  </el-header>
  <el-card class="box-card" shadow="hover">
   <div class="img-card__lazy">
         <el-image v-for="url in urls" :key="url" :src="url" lazy />
    </div>
     </el-card>

</el-container>
</template>


<script setup>

const urls = [
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  

]
</script>


<style scoped>

.box-card {
  width: 100%;  
  padding: 20px;
  border-radius: 8px;
}
.header-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background: #36a374;
}
.icon-header {
  font-size: 40px;
 margin-right: 10px;
  
}
.header-card .el-text {
  font-size:  30px;
  color: #fff;

}
.img-card__lazy {
  height: 500px;
  overflow-y: auto;
}
.img-card__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.img-card__lazy .el-image:last-child {
  margin-bottom: 0;
}
</style>
