<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <zk-cart title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </zk-cart>
      </el-col>
      <el-col :span="10">
        <zk-cart title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </zk-cart>
      </el-col>
      <el-col :span="7">
        <zk-cart title="分类商品数量(玫瑰图)">
          <rose-echart :pieData="categoryGoodsCount"></rose-echart>
        </zk-cart>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <zk-cart title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </zk-cart>
      </el-col>
      <el-col :span="12">
        <zk-cart title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </zk-cart>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"

import zkCart from "@/base-ui/card"

import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from "@/components/page-echarts"
export default defineComponent({
  name: "dashbiard",
  setup() {
    const store = useStore()
    store.dispatch("dashboardModule/getDashoardDataAction")

    const categoryGoodsCount = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboardModule.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboardModule.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })
    const addressGoodsSale = computed(() => {
      return store.state.dashboardModule.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  },
  components: {
    zkCart,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  }
})
</script>

<style scoped lang="less">
.content-row {
  margin-top: 10px;
}
</style>
