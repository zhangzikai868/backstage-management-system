import zkRequest from "../index"
import { IPhone, ILoginResult, IDataType } from "./types"

enum LoginAPI {
  phoneLogin = "/login",
  LoginUserInfo = "/users/",
  userMenus = "/role/"
}
export function phoneRequest(phone: IPhone) {
  return zkRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.phoneLogin,
    data: phone
  })
}

export function requestUserInfoById(id: number) {
  return zkRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return zkRequest.get<IDataType>({
    url: LoginAPI.userMenus + id + "/menu",
    showLoading: false
  })
}
