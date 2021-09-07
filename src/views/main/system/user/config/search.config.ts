export const searchFormConfig = {
  // 设置label的宽度
  labelWidth: "100px",
  // 设置item input的样式
  itmeLayout: {
    padding: "10px 40px"
  },
  // 响应式布局方式
  colLayout: {
    // span: 8 写死
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  // from的属性参数
  formItems: [
    {
      field: "id",
      type: "input",
      label: "ID",
      placeholder: "请输入ID"
    },
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名"
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码",
      placeholder: "请输入电话号码"
    },
    {
      field: "enable",
      type: "select",
      label: "用户状态",
      placeholder: "请选择用户状态",
      options: [
        { title: "启用", value: "1" },
        { title: "禁用", value: "0" }
      ]
    },
    {
      field: "createAt",
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
