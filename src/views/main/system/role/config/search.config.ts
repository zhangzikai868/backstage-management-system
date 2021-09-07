export const searchFormConfig = {
  // from的属性参数
  formItems: [
    { field: "id", type: "input", label: "ID", placeholder: "请输入ID" },
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      field: "intro",
      type: "input",
      label: "介绍查询",
      placeholder: "请输入介绍"
    },
    {
      field: "createTime",
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
