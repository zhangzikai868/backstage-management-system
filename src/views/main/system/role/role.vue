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
      :otherInfo="otherInfo"
      :defaultInfo="defaultInfo"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menu"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from "vue"
import { useStore } from "@/store"
import { PageContent } from "@/components/page-content"
import { PageSearch } from "@/components/page-search"
import { contentTableConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"

import PageDialog from "@/components/page-dialog"
import { dialogConfig } from "./config/dialog.config"
import { usePageDialog } from "@/hooks/usePageDialog"
import { getMenuLeafKeys } from "@/utils/map-menus"

import { ElTree } from "element-plus"

export default defineComponent({
  name: "role",
  setup() {
    // eltree回显
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      const leafKeys = getMenuLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageDialogRef, defaultInfo, handleNewData, handleEditData] =
      usePageDialog(undefined, editCallback)

    const store = useStore()
    const menu = computed(() => store.state.entirMenuList)

    // 将eltree和input中的数据一起发给后端
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    return {
      contentTableConfig,
      searchFormConfig,
      dialogConfig,
      pageDialogRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      menu,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  },
  components: {
    PageContent,
    PageSearch,
    PageDialog
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 25px;
}
</style>
