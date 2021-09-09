<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, withDefaults, defineProps, watchEffect } from "vue"
import { EChartsOption } from "echarts"

import useEchart from "../hooks/useEchart"
// 定义props
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: "100%",
    height: "350px"
  }
)
// 获取DOM元素
const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  // 调用hook传入el和options
  const { setOptions } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
