<template>
  <div class="login-from">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 账号登录</span>
        </template>
        <login-phone-input ref="phoneRef"></login-phone-input>
      </el-tab-pane>
      <el-tab-pane name="note">
        <template #label>
          <span><i class="el-icon-chat-dot-square"></i> 短信登录</span>
        </template>
        <login-note-input ref="noteRef"></login-note-input>
      </el-tab-pane>
    </el-tabs>
    <div class="option">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="register" @click="registerClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
// 手机登录input组件
import LoginPhoneInput from "./Login-phone-input.vue"
// 短信登录input组件
import LoginNoteInput from "./Login-note-input.vue"

export default defineComponent({
  setup() {
    const isKeepPassword = ref(true)
    const phoneRef = ref<InstanceType<typeof LoginPhoneInput>>()
    const noteRef = ref<InstanceType<typeof LoginNoteInput>>()
    const currentTab = ref("phone")

    const registerClick = () => {
      // 判断是手机登录还是短信登录
      if (currentTab.value === "phone") {
        phoneRef.value?.phoneLoginAction(isKeepPassword.value)
      } else if (currentTab.value === "note") {
        console.log(noteRef.value)
        noteRef.value?.noteLoginAction(isKeepPassword.value)
      }
    }
    return {
      isKeepPassword,
      registerClick,
      phoneRef,
      noteRef,
      currentTab
    }
  },
  components: { LoginPhoneInput, LoginNoteInput }
})
</script>

<style lang="less" scoped>
.login-from {
  width: 330px;
  margin-top: -160px;
  h1 {
    text-align: center;
  }
  .option {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .register {
    width: 100%;
  }
}
</style>
