import type { Module } from "vuex"
import route from "@/router"
import localCache from "@/utils/catche"
import { IPhone } from "@/service/login/types"
import { ILoginStore } from "./types"
import { IRootStore } from "../types"

import {
  phoneRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login"
import { mapMenusToRoutes } from "@/utils/map-menus"
import router from "@/router"

const loginStore: Module<ILoginStore, IRootStore> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
      // 动态添加路由 传入后端返回的内容
      const routers = mapMenusToRoutes(userMenus)
      routers.forEach((route) => {
        router.addRoute("main", route)
      })
    }
  },
  actions: {
    // 手机登录
    async phoneLoginAction({ commit }, payload: IPhone) {
      // 1.实现登录逻辑
      const loginResult = await phoneRequest(payload)
      const { id, token } = loginResult.data
      localCache.setCache("token", token)
      commit("changeToken", token)

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      localCache.setCache("userInfo", userInfo)
      commit("changeUserInfo", userInfo)

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      localCache.setCache("userMenus", userMenus)
      commit("changeUserMenus", userMenus)

      // 4.跳转到首页
      route.push("/main")
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("changeToken", token)
      }
      const userInfo = localCache.getCache("userInfo")
      if (token) {
        commit("changeUserInfo", userInfo)
      }
      const userMenus = localCache.getCache("userMenus")
      if (token) {
        commit("changeUserMenus", userMenus)
      }
    }
    // 短信登录
    // noteLoginAction({ commit }, payload) {
    //   console.log(payload)
    // }
  }
}

export default loginStore
