<template>
  <div class="category">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="resetBtnClick"
      @queryBtnClick="queryBtnClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="category"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { PageSearch } from "@/components/page-search"
import { searchFormConfig } from "./config/search.config"

import { PageContent } from "@/components/page-content"
import { contentTableConfig } from "./config/content.config"

import { usePageSearch } from "@/hooks/usePageSearch"

export default defineComponent({
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

<style scoped></style>
