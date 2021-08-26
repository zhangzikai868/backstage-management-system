<template>
  <div class="nav-header">
    <i
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      class="fold-menu"
      @click="handleFoldClick"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("isFold", isFold.value)
    }
    return { isFold, handleFoldClick }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 25px;
    cursor: pointer;
  }
}
</style>
