import { Module } from "vuex"
import { IRootStore } from "@/store/types"
import { ISystemState } from "./types"

import { getPageListDate } from "@/service/main/system/system"
const systemModule: Module<ISystemState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "user":
            return state.userList
          case "role":
            return state.roleList
          case "goods":
            return state.goodsList
          case "menu":
            return state.menuList
        }
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "user":
            return state.userCount
          case "role":
            return state.roleCount
          case "goods":
            return state.goodsCount
          case "menu":
            return state.menuCount
        }
      }
    }
  },
  mutations: {
    changeUserList(store, userList: any[]) {
      store.userList = userList
    },
    changeUserCount(store, userCount: number) {
      store.userCount = userCount
    },
    changeRoleList(store, roleList: any[]) {
      store.roleList = roleList
    },
    changeRoleCount(store, roleCount: number) {
      store.roleCount = roleCount
    },
    changeGoodsList(store, goodsList: any[]) {
      store.goodsList = goodsList
    },
    changeGoodsCount(store, goodsCount: number) {
      store.goodsCount = goodsCount
    },
    changeMenuList(store, menuList: any[]) {
      store.menuList = menuList
    },
    changeMenuCount(store, menuCount: number) {
      store.menuCount = menuCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1.获取pageUrl
      const pageName = payload.pageName
      let pageUrl = ""
      switch (pageName) {
        case "user":
          pageUrl = "/users/list"
          break
        case "role":
          pageUrl = "/role/list"
          break
        case "goods":
          pageUrl = "/goods/list"
          break
        case "menu":
          pageUrl = "/menu/list"
          break
      }
      // 2.对页面发送请求
      const pageResult = await getPageListDate(pageUrl, payload.queryInfo)
      // 3.将数据存放到state中
      const { list, totalCount } = pageResult.data
      switch (pageName) {
        case "user":
          commit("changeUserList", list)
          commit("changeUserCount", totalCount)
          break
        case "role":
          commit("changeRoleList", list)
          commit("changeRoleCount", totalCount)
          break
        case "goods":
          commit("changeGoodsList", list)
          commit("changeGoodsCount", totalCount)
          break
        case "menu":
          commit("changeMenuList", list)
          commit("changeMenuCount", totalCount)
          break
      }
    }
  }
}
export default systemModule
