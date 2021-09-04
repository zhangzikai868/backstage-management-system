<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { PageContent } from "@/components/page-content"
import { PageSearch } from "@/components/page-search"
import { contentTableConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"

export default defineComponent({
  name: "role",
  setup() {
    return { contentTableConfig, searchFormConfig }
  },
  components: {
    PageContent,
    PageSearch
  }
})
</script>

<style scoped></style>
