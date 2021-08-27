<template>
  <div class="nav-header">
    <i
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="fold-menu"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <div>面包屑</div>
      <el-dropdown>
        <div class="dropdown">
          <i class="el-icon-s-custom"></i>
          用户信息
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="goLogin">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useRouter } from "vue-router"

export default defineComponent({
  setup(props, { emit }) {
    const router = useRouter()
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("isFold", isFold.value)
    }
    const goLogin = () => {
      router.push({
        path: "/login"
      })
    }
    return { isFold, handleFoldClick, goLogin }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 25px;
    cursor: pointer;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    margin: 0 10px;
    .dropdown {
      cursor: pointer;
    }
  }
}
</style>
