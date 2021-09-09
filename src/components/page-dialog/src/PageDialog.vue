<template>
  <div class="dialog">
    <el-dialog
      title="新建用户"
      v-model="centerDialogVisible"
      width="30%"
      center
      destroy-on-close
    >
      <zk-form v-bind="dialogConfig" v-model="formData"></zk-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import { useStore } from "@/store"
import zkForm from "@/base-ui/form"

export default defineComponent({
  props: {
    dialogConfig: {
      type: Object,
      require: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      retuire: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const store = useStore()
    const centerDialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.dialogConfig?.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    // 点击确定发送网路请求添加数据
    const handleConfirmClick = () => {
      centerDialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 有值 - 编辑
        store.dispatch("system/editPageDataAction", {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 没值 - 新建
        store.dispatch("system/createPageDataAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }
    return { formData, centerDialogVisible, handleConfirmClick }
  },
  components: {
    zkForm
  }
})
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
