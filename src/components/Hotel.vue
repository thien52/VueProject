<template>
  <el-container>
    <el-header class="header">
      <el-menu
        mode="horizontal"
        class="transparent-menu"
        @select="handleSelect"
      >
        <el-menu-item index="1">Home</el-menu-item>
        <el-menu-item index="2">Rooms</el-menu-item>
        <el-menu-item index="3">About us</el-menu-item>
        <el-menu-item index="4">Gallery</el-menu-item>
        <el-menu-item index="5">Services</el-menu-item>
        <el-sub-menu index="6">
    <template #title>
      <span>Language</span>
    </template>

          <el-menu-item index="6-1">English</el-menu-item>
          <el-menu-item index="6-2">Vietnamese</el-menu-item>
        </el-sub-menu>
      </el-menu>
      <el-text class="banner" tag="h1"> Book Your Vacation </el-text>
<el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item >
    <el-date-picker
        v-model="formInline.day"
        type="daterange"
        range-separator="To"
        start-placeholder="Check in"
        end-placeholder="Check out"
        size="large"
      />
      </el-form-item>
    <el-form-item label="Adults" size="large">
      <el-select
        v-model="formInline.region"
        placeholder="Adults"
      >
        <el-option label="1" value="1" />
        <el-option label="2" value="2" />
        <el-option label="3" value="3" />
        <el-option label="4" value="4" />
      </el-select>
    </el-form-item>
        <el-form-item label="Notes" size="large">
      <el-input v-model="formInline.user" placeholder="Note...." clearable />
    </el-form-item>
    <el-form-item size="large">
      <el-button  @click="onSubmit">Book Rooms</el-button>
    </el-form-item>
  </el-form>
    
    </el-header>
  </el-container>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Hotel',
  setup() {
    const handleSelect = (key, keyPath) => {
      console.log('Selected key:', key);
      console.log('Key path:', keyPath);
    };
    const formInline = reactive({
  user: '',
  region: '',
  day:'',
})
 const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]
const onSubmit = () => {
  console.log('submit!')
}
    return {
      handleSelect,
      onSubmit,
      formInline
    };
  },
};
</script>

<style scoped>
.header {
  background-image: url('/images/header_hotel.jpg');
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

}

.transparent-menu {
  margin: 20px;

  display: flex;
  justify-content: space-evenly;
  background-color: transparent !important;
  border-bottom: none !important;
  width: 100%;
}
 
.transparent-menu .el-menu-item {
  color: #fff;
  font-size: 16px;
}

.transparent-menu .el-menu-item.is-active {
  background-color: transparent !important;
}

.transparent-menu .el-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

::v-deep(.el-sub-menu__title) {
  font-size: 16px!important;
  color: #fff !important;
}
::v-deep(.el-sub-menu__title:hover) {
  background-color: transparent !important;
  color: #409EFF !important;
}

.banner {
    font-family: "Allison", handwriting;        
    font-size: 126px;
    font-weight: 400;
    letter-spacing: 0px;
    text-transform: none;
    color: #ffffff;
    line-height: 1.2;
    transform: rotate(-2.4deg);
}
.demo-form-inline {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
}
.demo-form-inline ::v-deep(.el-date-picker) {
  margin-right: 10px;
}
.demo-form-inline ::v-deep(.el-select)
 {
  --el-select-width: 80px;
  
  
}
.demo-form-inline ::v-deep(.el-form-item__label) {
  color: #fff;
  font-size: 16px;
}
.demo-form-inline ::v-deep(.el-button ) {
 background-color: transparent;
 color: #fff;
}
</style>
