<template>
  <page-search
    :searchFormConfig="searchFormConfig"
    @resetBtnClick="resetBtnClick"
    @queryBtnClick="queryBtnClick"
  ></page-search>
  <page-content
    :contentTableConfig="contentTableConfig"
    pageName="users"
    ref="pageContentRef"
    @newBtnClick="handleNewData"
    @editBtnClick="handleEditData"
  >
    <template #btnTitle>
      <el-button size="mini" type="primary">新建用户</el-button>
    </template>
  </page-content>
  <page-dialog
    ref="pageDialogRef"
    :dialogConfig="dialogConfigRef"
    :defaultInfo="defaultInfo"
    pageName="users"
  >
  </page-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"
// search组件和table表格组件
import { PageSearch } from "@/components/page-search"
import { PageContent } from "@/components/page-content/"

// search和table配置
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"

import { usePageSearch } from "@/hooks/usePageSearch"

import PageDialog from "@/components/page-dialog"
import { dialogConfig } from "./config/dialog.config"
import { usePageDialog } from "@/hooks/usePageDialog"

export default defineComponent({
  name: "user",
  setup() {
    const store = useStore()
    const [pageContentRef, resetBtnClick, queryBtnClick] = usePageSearch()

    // pageDialog逻辑 是否显示密码框
    // 处理密码逻辑
    const newCallback = () => {
      const passwordItem = dialogConfig.formItems.find(
        (item) => item.field === "password"
      )
      passwordItem!.isShow = false
    }
    const editCallback = () => {
      const passwordItem = dialogConfig.formItems.find(
        (item) => item.field === "password"
      )
      passwordItem!.isShow = true
    }
    // 2.动态添加部门和角色列表
    const dialogConfigRef = computed(() => {
      const departmentItem = dialogConfig.formItems.find(
        (item) => item.field === "departmentId"
      )
      departmentItem!.options = store.state.entirDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })

      const roleItem = dialogConfig.formItems.find(
        (item) => item.field === "roleId"
      )
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id }
      })
      return dialogConfig
    })

    // 3.调用公共的hook获取变量和函数
    const [pageDialogRef, defaultInfo, handleNewData, handleEditData] =
      usePageDialog(newCallback, editCallback)
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      resetBtnClick,
      queryBtnClick,
      dialogConfigRef,
      pageDialogRef,
      handleNewData,
      handleEditData,
      defaultInfo
    }
  },
  components: {
    PageSearch,
    PageContent,
    PageDialog
  }
})
</script>

<style scoped lang="less"></style>
