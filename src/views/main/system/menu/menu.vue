<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { PageContent } from "@/components/page-content"
import { contentTableConfig } from "./config/content.config"

export default defineComponent({
  name: "menu",
  setup() {
    return { contentTableConfig }
  },
  components: {
    PageContent
  }
})
</script>

<style scoped></style>
