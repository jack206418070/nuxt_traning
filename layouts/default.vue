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
      this.$axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.firebaseApiKey}`, {
          ...user,
          returnSecureToken: true
      }).then(res => {
        this.closeLoginModal()
        this.$store.commit('user/user_login')
      }).catch(err => {
        console.dir(err)
      })
    },
    register (user) {
      this.$axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseApiKey}`, {
          ...user,
          returnSecureToken: true
      }).then(res => {
        this.closeLoginModal()
        console.log(res)
      }).catch(err => {
        console.dir(err)
      })
    }
  }
}
</script>

<style>

</style>