<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      ><template #btnTitle>
        <el-button size="mini" type="primary">新建角色</el-button>
      </template>
    </page-content>
    <page-dialog
      ref="pageDialogRef"
      :dialogConfig="dialogConfig"
      pageName="role"
    ></page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { PageContent } from "@/components/page-content"
import { PageSearch } from "@/components/page-search"
import { contentTableConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"

import PageDialog from "@/components/page-dialog"
import { dialogConfig } from "./config/dialog.config"
import { usePageDialog } from "@/hooks/usePageDialog"

export default defineComponent({
  name: "role",
  setup() {
    const [pageDialogRef, defaultInfo, handleNewData, handleEditData] =
      usePageDialog()
    return {
      contentTableConfig,
      searchFormConfig,
      dialogConfig,
      pageDialogRef,
      defaultInfo,
      handleNewData,
      handleEditData
    }
  },
  components: {
    PageContent,
    PageSearch,
    PageDialog
  }
})
</script>

<style scoped></style>
