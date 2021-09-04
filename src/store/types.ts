import { ILoginStore } from "./login/types"
import { ISystemState } from "./main/system/types"
export interface IRootStore {
  name: string
  password: string
}

export interface IRootWithModult {
  login: ILoginStore
  system: ISystemState
}

export type IStoreType = IRootStore & IRootWithModult
