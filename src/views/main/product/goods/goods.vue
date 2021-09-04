<template>
  <page-content :contentTableConfig="contentTableConfig" pageName="goods">
    <template #btnTitle>
      <el-button size="mini" type="primary">新建商品</el-button>
    </template>
  </page-content>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { PageContent } from "@/components/page-content"
import { contentTableConfig } from "./config/content.config"

export default defineComponent({
  setup() {
    return { contentTableConfig }
  },
  components: {
    PageContent
  }
})
</script>

<style scoped></style>
