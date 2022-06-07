<template>
  <header class="pt-10" :class="{ small: is_small === true }">
    <div class="container" style="postion: relative">
      <div class="header-top d-felx align-items-center jy-content-center mb-4">
        <h1 class="logo">
          <nuxt-link to="/">
            <img class="d-block mx-auto" src="~/assets/images/logo.png" alt="green safe">
          </nuxt-link>
        </h1>
        <div class="user-setting d-flex align-items-center">
          <div class="login">
            <fa :icon="['fas', 'user']" />
            <span class="px-3" @click="$emit('openlogin')">登入</span>
          </div>
          <div class="signUp">
            <span class="px-3">註冊</span>
          </div>
          <div class="cart pl-4">
            <fa :icon="['fas', 'cart-shopping']" />
          </div>
        </div>
      </div>
      <nav class="d-flex align-items-center jy-content-end">
        <div class="nav-item py-6 px-8 d-flex align-items-center jy-content-center">
          <nuxt-link to="/product">鮮食商城</nuxt-link>
          <div class="arrow-icon">
            <fa :icon="['fas', 'arrow-down']"/>
          </div>
        </div>
        <div class="nav-item py-6 px-8">訂購百貨箱</div>
        <div class="nav-item py-6 px-8">最新消息</div>
        <div class="nav-item py-6 px-8">料理教室</div>
        <div class="nav-item py-6 px-8">門市據點</div>
        <div class="nav-item py-6 px-8">關於我們</div>
        <div class="nav-item search py-6 pl-8 pr-0">
          <fa :icon="['fas', 'search']"/>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  emits: ['openlogin'],
  data () {
    return {
      is_small: false
    }
  },
  mounted () {
    const vm = this
    document.getElementsByTagName('body')[0].onscroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 0 || !vm.is_small) {
          vm.is_small = true
        } else if (window.scrollY === 0) {
          vm.is_small = false
        }
      }
    }
  }
}
</script>