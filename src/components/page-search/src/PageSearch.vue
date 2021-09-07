<template>
  <div class="page-search">
    <!-- search搜索区域内容 -->
    <zk-form v-bind="searchFormConfig" v-model="formDate">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button size="small" @click="removeClick"
            ><i class="el-icon-close"></i> 重置</el-button
          >
          <el-button size="small" type="primary" @click="handleSearch"
            ><i class="el-icon-search"></i> 搜索</el-button
          >
        </div>
      </template>
    </zk-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import zkForm from "@/base-ui/form"
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      require: true
    }
  },
  emits: ["resetBtnClick", "queryBtnClick"],
  setup(props, { emit }) {
    // 动态决定formData中的属性
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ""
    }
    const formDate = ref(formOriginData)

    // 点击重置formData中的属性
    const removeClick = () => {
      formDate.value = formOriginData
      emit("resetBtnClick")
    }
    // 点击搜索
    const handleSearch = () => {
      emit("queryBtnClick", formDate.value)
    }

    return { formDate, removeClick, handleSearch }
  },
  components: {
    zkForm
  }
})
</script>

<style scoped>
.header {
  color: red;
  font-size: 20px;
}
.footer {
  text-align: right;
  margin: 0 40px 0 0;
  padding-bottom: 20px;
}
</style>
