<template>
  <page-search
    :searchFormConfig="searchFormConfig"
    @resetBtnClick="resetBtnClick"
    @queryBtnClick="queryBtnClick"
  ></page-search>
  <page-content
    :contentTableConfig="contentTableConfig"
    pageName="user"
    ref="pageContentRef"
  >
    <template #btnTitle>
      <el-button size="mini" type="primary">新建用户</el-button>
    </template></page-content
  >
</template>

<script lang="ts">
import { defineComponent } from "vue"

// search组件和table表格组件
import { PageSearch } from "@/components/page-search"
import { PageContent } from "@/components/page-content/"

// search和table配置
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"

import { usePageSearch } from "@/hooks/usePageSearch"

export default defineComponent({
  name: "department",
  setup() {
    const [pageContentRef, resetBtnClick, queryBtnClick] = usePageSearch()
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      resetBtnClick,
      queryBtnClick
    }
  },
  components: {
    PageSearch,
    PageContent
  }
})
</script>

<style scoped lang="less"></style>
