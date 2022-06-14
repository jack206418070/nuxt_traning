<template>
  <header class="pt-10" :class="{ small: is_small === true }">
    <div class="container" style="postion: relative">
      <div class="header-top d-felx align-items-center jy-content-center mb-4">
        <h1 class="logo">
          <nuxt-link to="/">
            <img class="d-block mx-auto" src="~/assets/images/logo.png" alt="green safe">
          </nuxt-link>
        </h1>
        <div class="user-setting">
          <div v-if="!isUserLogin" class="d-flex align-items-center">
            <div class="login">
              <fa :icon="['fas', 'user']" />
              <span class="px-3" @click="$emit('openlogin',
              false)">登入</span>
            </div>
            <div class="signUp">
              <span class="px-3" @click="$emit('openlogin',
              true)">註冊</span>
            </div>
            <div class="cart pl-4">
              <fa :icon="['fas', 'cart-shopping']" />
            </div>
          </div>
          <div v-else class="d-flex align-items-center">
            <div class="login d-flex align-items-center">
              <nuxt-link to="/user">
                <fa :icon="['fas', 'user']" />
              </nuxt-link>
              <div style="font-size: 12px" class="px-3">
                <p><nuxt-link to="/user">{{ getUserName }}, 午安！</nuxt-link> <a class="pl-3 text-primary" @click="$emit('logout')" href="javascript:;">登出</a></p>
                <nuxt-link to="/user">
                  <p>您目前的會員等級是台灣椪柑</p>
                </nuxt-link>
              </div>
            </div>
            <div class="cart pl-4">
              <fa :icon="['fas', 'cart-shopping']" />
            </div>
          </div>
        </div>

      </div>
      <nav class="d-flex align-items-center jy-content-end">
        <div class="nav-item py-6 px-8 d-flex align-items-center jy-content-center">
          <nuxt-link to="/products">鮮食商城</nuxt-link>
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
import Cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'

export default {
  emits: ['openlogin', 'logout'],
  data () {
    return {
      is_small: false
    }
  },
  computed: {
    isUserLogin () {
      return this.$store.state.user.isUserLogin
    },
    getUserName () {
      return this.$store.state.user.userName
    },
    getUserPicture () {
      return this.$store.state.user.userPicture
    }
  },
  mounted () {
    console.log(Cookie)
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
    if(this.$route.query.id_token && this.$route.query.refresh_token){
      let id_token_Decode = jwtDecode(this.$route.query.id_token);
      this.$store.commit('user/setUserLogin', {
        id_token: this.$route.query.id_token,
        refresh_token: this.$route.query.refresh_token,
        userUid: id_token_Decode.user_id,
        userPicture: id_token_Decode.picture,
        userName: id_token_Decode.name,
      });
      window.history.replaceState(null, null, window.location.pathname);
      return
    }
    if (Cookie.get('id_token')) {
      this.$store.commit('user/setUserLogin', {
        id_token: Cookie.get('id_token'),
        refresh_token: Cookie.get('refresh_token'),
        userUid: Cookie.get('userUid'),
        userPicture: Cookie.get('userPicture'),
        userName: Cookie.get('userName'),
      });
    }
  }
}
</script>