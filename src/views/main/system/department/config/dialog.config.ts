import { IForm } from "@/base-ui/form/types"
export const dialogConfig: IForm = {
  colLayout: { span: 24 },
  formItems: [
    {
      field: "name",
      type: "input",
      label: "部门名称",
      placeholder: "请输入部门名称"
    },
    {
      field: "parentId",
      type: "select",
      label: "上级部门",
      placeholder: "请选择上级部门",
      options: [{ label: "制造3部", value: 143 }]
    },
    {
      field: "leader",
      type: "input",
      label: "领导名称",
      placeholder: "请输入领导名称"
    }
  ]
}
