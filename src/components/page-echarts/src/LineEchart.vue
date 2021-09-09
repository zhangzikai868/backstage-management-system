<template>
  <div class="line-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue"
import BaseEchart from "@/base-ui/echart"

const props = defineProps<{
  xLabels: string[]
  values: any[]
}>()

const options = computed(() => {
  return {
    legend: {
      data: ["销量"],
      left: 10
    },
    xAxis: {
      type: "category",
      data: props.xLabels
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        name: "销量",
        data: props.values,
        type: "line"
      }
    ]
  }
})
</script>

<style scoped></style>
