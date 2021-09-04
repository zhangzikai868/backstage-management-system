export const contentTableConfig = {
  // header标题
  title: "商品列表",
  // 表格是否显示序号
  showIndexColumn: true,
  // 表格行是否可以被选中
  showCheckoutColumn: true,
  propList: [
    { prop: "name", label: "商品名称", minWidth: "80" },
    { prop: "oldPrice", label: "原价格", minWidth: "80" },
    { prop: "newPrice", label: "现价格", minWidth: "80" },
    { prop: "imgUrl", label: "商品图片", minWidth: "100", slotName: "imgUrl" },
    { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
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
