<template>
  <div class="login-phone-input">
    <el-form label-width="65px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="账&emsp;号" prop="name">
        <el-input v-model="phone.name"></el-input>
      </el-form-item>
      <el-form-item label="密&emsp;码" prop="password">
        <el-input type="password" v-model="phone.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import type { ElForm } from "element-plus"

export default defineComponent({
  setup() {
    const phone = reactive({
      name: "",
      password: ""
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    // 账号登录逻辑验证
    const phoneLoginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log("正在登录!!!")
        }
      })
    }
    // 表单验证规则
    const rules = {
      name: [
        { required: true, message: "请输入用户名!", trigger: "blur" },
        {
          pattern: /^[a-z0-9]{8,10}$/,
          message: "用户名长度为8-10个字母或数字",
          trugger: "blur"
        }
      ],
      password: [
        { required: true, message: "请输入密码!", trigger: "blur" },
        {
          pattern: /^[a-z0-9]{6,}$/,
          message: "密码长度不足",
          trugger: "blur"
        }
      ]
    }
    return { phone, rules, phoneLoginAction, formRef }
  }
})
</script>

<style lang="scss" scoped></style>
