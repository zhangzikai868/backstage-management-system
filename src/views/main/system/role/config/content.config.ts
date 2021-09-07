export const contentTableConfig = {
  // header标题
  title: "角色管理",
  // 表格是否显示序号
  showIndexColumn: true,
  // 表格行是否可以被选中
  showCheckoutColumn: true,
  propList: [
    { prop: "name", label: "角色名", minWidth: "100" },
    { prop: "intro", label: "权限介绍", minWidth: "100" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "250",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "250",
      slotName: "updateAt"
    },
    {
      label: "操作",
      minWidth: "120",
      slotName: "handler"
    }
  ]
}
