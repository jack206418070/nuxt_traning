<template>
  <div>
    <LoginModal
      @login="login"
      @register="register"
      ref="loginModal" 
    />
    <Header
      @openlogin="openLoginModal"
      @logout="logout"
    />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import LoginModal from '~/components/modal/LoginModal.vue'
import API from '~/api'

export default {
  components: {
    Header,
    Footer,
    LoginModal
  },
  methods: {
    openLoginModal (is_signUp) {
      this.$refs.loginModal.openModal(is_signUp);
    },
    closeLoginModal () {
      this.$refs.loginModal.closeModal();
    },
    logout () {
      this.$store.commit('user/setUserLogout')
    },
    login (user) {
      this.$axios({
        method: API.member.login.method,
        url: API.member.login.url,
        baseURL: process.env.google_api_url,
        headers: { 'Content-Type': 'application/json'},
        data: {
          ...user,
          returnSecureToken: true
        }
      }).then(res => {
        this.closeLoginModal()
        this.$store.commit('user/setUserLogin', {
          id_token: res.data.idToken,
          refresh_token: res.data.refreshToken,
          userUid: res.data.localId,
          userName: res.data.email,
          // exp: Date.now() + (+res.data.expiresIn * 1000)
          exp: Date.now() + 60000
        })
      }).catch(err => {
        console.dir(err)
      })
    },
    register (user) {
      this.$axios({
        method: API.member.registered.method,
        url: API.member.registered.url,
        baseURL: process.env.google_api_url,
        headers: { 'Content-Type': 'application/json'},
        data: {
          ...user,
          returnSecureToken: true
        }
      }).then(res => {
        console.log(res.data)
        this.closeLoginModal()
      }).catch(err => {
        console.dir(err)
      })
    }
  }
}
</script>

<style>

</style>