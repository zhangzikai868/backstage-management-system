<template>
  <div id="app">
    <h2>{{ $store.state.message }}</h2>
    <h2>{{ $store.state.message }}</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/login">登录</router-link>
    <router-view></router-view>

    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-input></el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "App"
})
</script>

<style lang="less">
h2 {
  display: inline-block;
  margin: 0 10px;
}
</style>
