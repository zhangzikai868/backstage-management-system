import { IForm } from "@/base-ui/form/types"
export const dialogConfig: IForm = {
  colLayout: { span: 24 },
  itemStyle: {},
  formItems: [
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
      field: "password",
      type: "password",
      label: "密码",
      // 输入框是否被隐藏 true是
      isShow: true,
      placeholder: "请输入密码"
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码",
      placeholder: "请输入电话号码"
    },
    {
      field: "departmentId",
      type: "select",
      label: "选择部门",
      placeholder: "请选择部门",
      options: []
    },
    {
      field: "roleId",
      type: "select",
      label: "选择角色",
      placeholder: "请选择角色",
      options: []
    }
  ]
}
