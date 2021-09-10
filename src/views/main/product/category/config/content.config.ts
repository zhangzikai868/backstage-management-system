export const contentTableConfig = {
  // header标题
  title: "类别列表",
  // 表格是否显示序号
  showIndexColumn: true,
  // 表格行是否可以被选中
  showCheckoutColumn: true,
  propList: [
    { prop: "name", label: "商品类别", minWidth: "120" },
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
