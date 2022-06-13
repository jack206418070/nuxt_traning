<template>
  <div class="mask" :class="{ show: is_show }" @click.self="closeModal">
    <div v-if="!is_signUp" class="login-modal d-flex flex-dir-col align-items-center">
      <div class="icon" style="flex: 0 0 80px">
        <fa :icon="['far', 'user']" />
      </div>
      <h3>登入會員</h3>
      <div class="form-group">
        <div class="form-control">
          <label for="account">會員帳號</label>
          <input type="text" id="account" name="account" placeholder="請輸入註冊信箱" @focus="foucsInput" @blur="blurInput" v-model.trim="user.email">
        </div>
        <div class="form-control">
          <label for="password">會員密碼</label>
          <input type="password" id="password" name="password" placeholder="請輸入密碼" autocomplete="true" @focus="foucsInput" @blur="blurInput" v-model="user.password">
        </div>
      </div>
      <div class="btn-group mb-3">
        <button type="button" class="btn btn-primary" @click="is_signUp = true">註冊會員</button>
        <button type="button" class="btn btn-primary" @click="$emit('login', { email: user.email, password: user.password })">登入</button>
      </div>
      <a href="/auth?type=google" class="btn btn-primary text-center py-3 mb-5" style="width: 100%">使用 google 帳號登入</a>
      <a href="/auth?type=facebook" class="btn btn-primary text-center py-3" style="width: 100%">使用 facebook 帳號登入</a>
      <hr>
      <div class="close-btn" @click="closeModal">
        <fa :icon="['fas', 'times']" />
      </div>
    </div>
    <div v-else class="login-modal d-flex flex-dir-col align-items-center">
      <div class="icon" style="flex: 0 0 80px">
        <fa :icon="['far', 'user']" />
      </div>
      <h3 class="py-5">註冊會員</h3>
      <div class="form-group">
        <div class="form-control">
          <input type="text" id="account" name="account" placeholder="請輸入姓名" @focus="foucsInput" @blur="blurInput" v-model.trim="user.name">
        </div>
        <div class="form-control">
          <input type="text" id="account" name="account" placeholder="請輸入信箱" @focus="foucsInput" @blur="blurInput" v-model.trim="user.email">
        </div>
        <div class="form-control">
          <input type="password" id="password" name="password" placeholder="請輸入密碼" autocomplete="true" @focus="foucsInput" @blur="blurInput" v-model.trim="user.password">
        </div>
        <div class="form-control">
          <input type="password" id="password" name="password" placeholder="再次入密碼" autocomplete="true" @focus="foucsInput" v-model="user.passwordCheck"  @blur="blurInput($event, 'checkPassword')">
        </div>
      </div>
      <div class="btn-group">
        <button type="button" class="btn btn-primary" @click="is_signUp = false">前往登入</button>
        <button type="button" class="btn btn-primary" @click="$emit('register', { email: user.email, password: user.password })">註冊會員</button>
      </div>
      <div class="close-btn" @click="closeModal">
        <fa :icon="['fas', 'times']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['login', 'register'],
  data () {
    return {
      is_show: false,
      is_signUp: false,
      user: {}
    }
  },
  methods: {
    openModal (is_signUp) {
      this.is_show = true
      this.is_signUp = is_signUp
    },
    closeModal () {
      this.is_show = false
      this.user = {}
    },
    foucsInput (e) {
      e.target.parentElement.className += ' foucs'
    },
    blurInput (event, check = null) {
      if (check === 'checkPassword') {
        if (this.user.passwordCheck == this.user.password) {
          event.target.parentElement.className = 'form-control'
        } else {
          alert('請確認輸入密碼是否一樣')
        }
      } else {
        event.target.parentElement.className = 'form-control'
      }
    },
    routeTo (router) {
      this.closeModal()
      this.$router.push(router)
    }
  }
}
</script>
