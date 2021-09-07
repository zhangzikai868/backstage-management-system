import { createStore, Store, useStore as vuexUseStore } from "vuex"

import loginStore from "./login/loginStore"
import system from "./main/system/system"
import { IRootStore, IStoreType } from "./types"

import { getPageListDate } from "@/service/main/system/system"
const store = createStore<IRootStore>({
  state() {
    return {
      entirDepartment: [],
      entireRole: []
    }
  },
  getters: {},
  mutations: {
    changeEntirDepartment(store, value) {
      store.entirDepartment = value
    },
    changeEntireRole(store, value) {
      store.entireRole = value
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      //  1. 请求部门和角色数据
      const departmentResule = await getPageListDate("/department/list", {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResule.data

      const roleResule = await getPageListDate("/role/list", {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResule.data
      // 2.保存数据
      commit("changeEntirDepartment", departmentList)
      commit("changeEntireRole", roleList)
    }
  },
  modules: { loginStore, system }
})

// 防止刷新数据消失
export function setupStore() {
  store.dispatch("loginStore/loadLocalLogin")
  store.dispatch("getInitialDataAction")
}

export function useStore(): Store<IStoreType> {
  return vuexUseStore()
}

export default store
