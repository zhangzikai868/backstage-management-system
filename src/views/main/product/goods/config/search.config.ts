import { IForm } from "@/base-ui/form"

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称"
    },
    {
      field: "address",
      type: "input",
      label: "商品地址",
      placeholder: "请输入商品地址"
    },
    {
      field: "enable",
      type: "select",
      label: "状态",
      placeholder: "请选择商品状态",
      options: [
        { title: "可用", value: "1" },
        { title: "下架", value: "0" }
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
  ],
  labelWidth: "100px",
  itemStyle: { padding: "10px 40px" },
  colLayout: { span: 8 }
}
