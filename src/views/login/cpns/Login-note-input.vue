<template>
  <div class="login-note-input">
    <el-form label-width="65px" :rules="rules" :model="note" ref="formRef">
      <el-form-item label="手机号" prop="tel">
        <el-input v-model="note.tel"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="authCode">
        <div class="auth-code">
          <el-input v-model="note.authCode"></el-input>
          <el-button type="primary" class="auth-code-btn" @click="authClick"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { useStore } from "vuex"
import { ElForm } from "element-plus"

import localCache from "@/utils/catche"

export default defineComponent({
  setup() {
    const store = useStore()
    const note = reactive({
      tel: localCache.getCache("tel") ?? "",
      authCode: ""
    })
    // 随机验证码
    const authClick = () => {
      if (note.tel.length === 11) {
        let out = ref<number>()
        do {
          out.value = Math.floor(Math.random() * 10000)
        } while (out.value < 1000)
        note.authCode = out.value + ""
      }
    }
    const formRef = ref<InstanceType<typeof ElForm>>()
    // 短信的登录逻辑
    const noteLoginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            localCache.setCache("tel", note.tel)
            localCache.setCache("authCode", note.authCode)
          } else {
            localCache.deleteCache("tel")
            localCache.deleteCache("authCode")
          }
          // 2.开始进行登录验证
          store.dispatch("loginStore/noteLoginAction", { ...note })
        }
      })
    }
    const rules = {
      tel: [
        { required: true, message: "请输入手机号!", trigger: "blur" },
        {
          pattern: /^1[3|4|5|7|8][0-9]{9}$/,
          message: "手机号码不正确",
          trugger: "blur"
        }
      ],
      authCode: [
        { required: true, message: "请输入验证码!", trigger: "blur" },
        {
          pattern: /^[0-9]{4}$/,
          message: "验证码不正确",
          trugger: "blur"
        }
      ]
    }
    return {
      note,
      rules,
      authClick,
      formRef,
      noteLoginAction
    }
  }
})
</script>

<style lang="less" scoped>
.auth-code {
  display: flex;
}
.auth-code-btn {
  margin-left: 5px;
  padding: 3px 5px;
}
</style>
