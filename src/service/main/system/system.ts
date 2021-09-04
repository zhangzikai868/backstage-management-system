import zkRequest from "@/service"

export function getPageListDate(url: string, queryInfo: any) {
  return zkRequest.post({
    url: url,
    data: queryInfo,
    showLoading: false
  })
}
