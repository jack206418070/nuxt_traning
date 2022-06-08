<template>
  <div class="mask" :class="{ show: is_show }" @click.self="closeModal">
    <div class="login-modal d-flex flex-dir-col align-items-center">
      <div class="icon mb-5">
        <fa :icon="['far', 'user']" />
      </div>
      <h3 class="mb-5">登入會員</h3>
      <div class="form-group">
        <div class="form-control">
          <label for="account">會員帳號</label>
          <input type="text" id="account" name="account" placeholder="請輸入註冊信箱" @focus="foucsInput" @blur="blurInput">
        </div>
        <div class="form-control">
          <label for="password">會員密碼</label>
          <input type="password" id="password" name="password" placeholder="請輸入密碼" autocomplete="true" @focus="foucsInput" @blur="blurInput">
        </div>
      </div>
      <button type="button" class="btn btn-primary" @click="routeTo('user')">登入</button>
      <div class="close-btn" @click="closeModal">
        <fa :icon="['fas', 'times']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      is_show: false
    }
  },
  methods: {
    openModal () {
      this.is_show = true;
    },
    closeModal () {
      this.is_show = false;
    },
    foucsInput (e) {
      e.target.parentElement.className += ' foucs'
    },
    blurInput (e) {
      e.target.parentElement.className = 'form-control'
    },
    routeTo (router) {
      this.closeModal()
      this.$router.push(router)
    }
  }
}
</script>

<style lang="scss">

</style>