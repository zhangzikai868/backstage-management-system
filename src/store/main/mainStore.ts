import type { Module } from "vuex"

import { IRootStore } from "../types"
import { INoteStore } from "./types"

const loginStore: Module<INoteStore, IRootStore> = {
  namespaced: true,
  state() {
    return {
      tel: "",
      authCode: ""
    }
  },
  getters: {},
  mutations: {},
  actions: {
    // 短信登录
    noteLoginAction({ commit }, payload) {
      console.log(payload)
    }
  }
}

export default loginStore
