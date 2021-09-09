import zkRequest from "../../index"

enum DashboardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale"
}

export function getCategoryGoodsCount() {
  return zkRequest.get({
    url: DashboardAPI.categoryGoodsCount,
    showLoading: false
  })
}

export function getCategoryGoodsSale() {
  return zkRequest.get({
    url: DashboardAPI.categoryGoodsSale,
    showLoading: false
  })
}

export function getCategoryGoodsFavor() {
  return zkRequest.get({
    url: DashboardAPI.categoryGoodsFavor,
    showLoading: false
  })
}

export function getAddressGoodsSale() {
  return zkRequest.get({
    url: DashboardAPI.addressGoodsSale,
    showLoading: false
  })
}
