<template>
  <div class="department">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="resetBtnClick"
      @queryBtnClick="queryBtnClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="department"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      ><template #btnTitle>
        <el-button size="mini" type="primary">新建部门</el-button>
      </template></page-content
    >
    <page-dialog
      ref="pageDialogRef"
      :dialogConfig="dialogConfigRef"
      :defaultInfo="defaultInfo"
      pageName="department"
    ></page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"

import { PageSearch } from "@/components/page-search"
import { searchFormConfig } from "./config/search.config"

import { PageContent } from "@/components/page-content"
import { contentTableConfig } from "./config/content.config"

import PageDialog from "@/components/page-dialog"
import { dialogConfig } from "./config/dialog.config"

import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageDialog } from "@/hooks/usePageDialog"

export default defineComponent({
  name: "department",
  setup() {
    const [pageContentRef, resetBtnClick, queryBtnClick] = usePageSearch()

    // modal配置信息
    const store = useStore()
    const dialogConfigRef = computed(() => {
      const parentIdItem = dialogConfig.formItems?.find(
        (item) => item.field === "parentId"
      )
      parentIdItem!.options = store.state.entirDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })
      console.log(dialogConfig)
      return dialogConfig
    })

    // 处理modal的hook
    const [pageDialogRef, defaultInfo, handleNewData, handleEditData] =
      usePageDialog()
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      resetBtnClick,
      queryBtnClick,
      dialogConfigRef,
      defaultInfo,
      pageDialogRef,
      handleNewData,
      handleEditData
    }
  },
  components: { PageSearch, PageContent, PageDialog }
})
</script>

<style scoped></style>
