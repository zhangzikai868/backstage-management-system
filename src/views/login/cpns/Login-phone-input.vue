<template>
  <div class="login-phone-input">
    <el-form label-width="65px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="账&emsp;号" prop="name">
        <el-input v-model="phone.name"></el-input>
      </el-form-item>
      <el-form-item label="密&emsp;码" prop="password">
        <el-input show-password v-model="phone.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { useStore } from "vuex"
import type { ElForm } from "element-plus"

// 本地缓存
import localCache from "@/utils/catche"

export default defineComponent({
  setup() {
    const store = useStore()
    const phone = reactive({
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? ""
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    // 账号登录逻辑验证
    const phoneLoginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            localCache.setCache("name", phone.name)
            localCache.setCache("password", phone.password)
          } else {
            localCache.deleteCache("name")
            localCache.deleteCache("password")
          }
          // 2.开始进行登录验证
          store.dispatch("loginStore/phoneLoginAction", { ...phone })
        }
      })
    }
    // 表单验证规则
    const rules = {
      name: [
        { required: true, message: "请输入用户名!", trigger: "blur" },
        {
          pattern: /^[a-z0-9]{8,11}$/,
          message: "用户名长度为8-11个字母或数字",
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
