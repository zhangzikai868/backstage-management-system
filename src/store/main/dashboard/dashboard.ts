import { Module } from "vuex"
import { IRootStore } from "@/store/types"
import { IDashboardDtate } from "./types"

import {
  getCategoryGoodsCount,
  getAddressGoodsSale,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from "@/service/main/analysis/dashboard"
import store from "@/store"

const dashboardModule: Module<IDashboardDtate, IRootStore> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashoardDataAction({ commit }) {
      const categoryGoodsCount = await getCategoryGoodsCount()
      commit("changeCategoryGoodsCount", categoryGoodsCount.data)

      const categoryAddressGoodsSale = await getAddressGoodsSale()
      commit("changeAddressGoodsSale", categoryAddressGoodsSale.data)

      const categoryCategoryGoodsFavor = await getCategoryGoodsFavor()
      commit("changeCategoryGoodsFavor", categoryCategoryGoodsFavor.data)

      const categoryGoodsSale = await getCategoryGoodsSale()
      commit("changeCategoryGoodsSale", categoryGoodsSale.data)
    }
  }
}
export default dashboardModule
