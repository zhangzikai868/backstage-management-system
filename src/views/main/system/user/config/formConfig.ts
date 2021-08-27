import { IForm } from "@/base-ui/form"
const formConfig: IForm = {
  labelWidth: "100px",
  itemStyle: { padding: "10px 40px" },
  colLayout: {
    // span: 8 写死
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  formItems: [
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
}
export { formConfig }
