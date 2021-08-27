<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <nav-menu :collapse="isFold"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @isFold="mainIsFold"></nav-header>
        </el-header>
        <el-main class="page-main">
          <div class="user-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
// 左侧导航菜单
import { NavMenu } from "@/components/nav-menu"
// 顶部菜单
import { NavHeader } from "@/components/nav-header"

export default defineComponent({
  setup() {
    const isFold = ref(false)
    const mainIsFold = (item: boolean) => {
      isFold.value = item
    }
    return {
      isFold,
      mainIsFold
    }
  },
  components: {
    NavMenu,
    NavHeader
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);

  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
  .user-info {
    background-color: #fff;
    border-radius: 5px;
  }
}
</style>
