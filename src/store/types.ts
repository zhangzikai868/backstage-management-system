import { ILoginStore } from "./login/types"
import { ISystemState } from "./main/system/types"
export interface IRootStore {
  entirDepartment: any[]
  entireRole: any[]
}

export interface IRootWithModult {
  login: ILoginStore
  system: ISystemState
}

export type IStoreType = IRootStore & IRootWithModult
