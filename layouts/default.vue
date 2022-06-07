<template>
  <div>
    <LoginModal ref="loginModal" />
    <Header @openlogin="openLoginModal" />
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
    openLoginModal () {
      this.$refs.loginModal.openModal();
    }
  }
}
</script>

<style>

</style>