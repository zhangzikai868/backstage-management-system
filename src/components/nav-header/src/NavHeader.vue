<template>
  <div class="nav-header">
    <i
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="fold-menu"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <div>
        <breadcrumb :breadcrumb="breadcrumb"></breadcrumb>
      </div>
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
import { defineComponent, ref, computed } from "vue"
import { useRouter, useRoute } from "vue-router"
import { useStore } from "vuex"

import Breadcrumb from "./Breadcrumb.vue"
import { pathMapBreadcrumbs } from "@/utils/map-menus"

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
    // 面包屑数据name path
    // 获取数据和路径
    const store = useStore()
    const route = useRoute()
    const breadcrumb = computed(() => {
      const useMenus = store.state.loginStore.userMenus
      const currentPath = route.path
      return pathMapBreadcrumbs(useMenus, currentPath)
    })
    return { isFold, handleFoldClick, goLogin, breadcrumb }
  },
  components: {
    Breadcrumb
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
