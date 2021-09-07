import zkRequest from "@/service"
import { IDataType } from "@/service/login/types"

export function getPageListDate(url: string, queryInfo: any) {
  return zkRequest.post<IDataType>({
    url: url,
    data: queryInfo,
    showLoading: false
  })
}

export function deletePageData(url: string) {
  return zkRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return zkRequest.post<IDataType>({
    url: url,
    data: newData
  })
}
export function editPageData(url: string, editData: any) {
  return zkRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
