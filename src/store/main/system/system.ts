import { Module } from "vuex"
import { IRootStore } from "@/store/types"
import { ISystemState } from "./types"

import {
  getPageListDate,
  deletePageData,
  createPageData,
  editPageData
} from "@/service/main/system/system"
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
          case "users":
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
          case "users":
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
        case "users":
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
        case "users":
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
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}/`
      await deletePageData(pageUrl)
      // 重新请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    // 新建用户和编辑的网络请求
    async createPageDataAction({ dispatch }, payload: any) {
      // 创建数据请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      // 重新再请求数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}
export default systemModule
