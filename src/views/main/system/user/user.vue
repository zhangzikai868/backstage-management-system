<template>
  <div class="department">
    <zk-form
      :fromItems="fromItems"
      :labelWidth="labelWidth"
      :itmeStyle="itmeStyle"
      :colLayout="colLayout"
    ></zk-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import zkForm, { IFormItem } from "@/base-ui/form/index"

export default defineComponent({
  name: "department",
  setup() {
    // 设置label的宽度
    const labelWidth = "100px"
    // 设置item input的样式
    const itmeStyle = { padding: "10px 40px" }
    // 响应式布局方式
    const colLayout = {
      // span: 8 写死
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    }
    // from的属性参数
    const fromItems: IFormItem[] = [
      { type: "input", label: "id", placeholder: "请输入ID" },
      { type: "input", label: "用户名", placeholder: "请输入用户名" },
      { type: "password", label: "密码", placeholder: "请输入密码" },
      {
        type: "select",
        label: "喜欢的运动",
        placeholder: "请选择喜欢的运动",
        options: [
          { title: "篮球", value: "basketball" },
          { title: "足球", value: "football" },
          { title: "羽毛球", value: "yumaoqiu" }
        ]
      },
      {
        type: "datepicker",
        label: "创建时间",
        otherOptions: {
          startPlaceholder: "开始时间",
          endPlaceholder: "结束时间",
          type: "daterange"
        }
      }
    ]
    return { fromItems, labelWidth, itmeStyle, colLayout }
  },
  components: {
    zkForm
  }
})
</script>

<style scoped></style>
