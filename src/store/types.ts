import { ILoginStore } from "./login/types"
import { ISystemState } from "./main/system/types"
import { IDashboardDtate } from "./main/dashboard/types"
export interface IRootStore {
  entirDepartment: any[]
  entireRole: any[]
  entirMenuList: any[]
}

export interface IRootWithModult {
  login: ILoginStore
  system: ISystemState
  dashboardModule: IDashboardDtate
}

export type IStoreType = IRootStore & IRootWithModult
