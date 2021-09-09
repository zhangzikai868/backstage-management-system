import * as echarts from "echarts"

import ChinaMapData from "../data/china.json"
echarts.registerMap("china", ChinaMapData)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  // 让外界主动调用
  const setResize = () => {
    echartInstance.resize()
  }

  // 监听浏览器缩小自动对图形进行调整
  window.addEventListener("resize", () => {
    echartInstance.resize()
  })

  return { echartInstance, setOptions, setResize }
}
