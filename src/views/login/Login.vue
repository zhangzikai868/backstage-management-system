<template>
  <div class="login">
    <login-from></login-from>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LoginFrom from "./cpns/Login-from.vue"
export default defineComponent({
  setup() {
    return {}
  },
  components: { LoginFrom }
})
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.svg");
}
</style>
