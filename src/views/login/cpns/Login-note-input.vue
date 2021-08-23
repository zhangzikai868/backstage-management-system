<template>
  <div class="login-note-input">
    <el-form label-width="65px" :rules="rules" :model="note">
      <el-form-item label="手机号" prop="tel">
        <el-input v-model="note.tel"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="authCode">
        <div class="auth-code">
          <el-input v-model="note.authCode"></el-input>
          <el-button type="primary" class="auth-code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

export default defineComponent({
  setup() {
    const note = reactive({
      tel: "",
      authCode: ""
    })
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
      rules
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
