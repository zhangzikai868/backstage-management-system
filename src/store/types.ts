import { ILoginStore } from "./login/types"
export interface IRootStore {
  name: string
  password: string
}

export interface IRootWithModult {
  login: ILoginStore
}

export type IStoreType = IRootStore & IRootWithModult
