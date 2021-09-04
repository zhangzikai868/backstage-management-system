<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { ElConfigProvider } from "element-plus"
import zhCn from "element-plus/lib/locale/lang/zh-cn"
export default defineComponent({
  name: "App",
  data() {
    return {
      locale: zhCn
    }
  },
  components: {
    ElConfigProvider
  }
})
</script>

<style lang="less"></style>
