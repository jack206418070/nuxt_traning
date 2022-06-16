<template>
  <div class="container">
    <div class="user-favor">
      <Breadcrumb>
        <template v-slot:bread-1>
          <nuxt-link to="/user"><span class="px-1">/</span> 會員專區</nuxt-link>
        </template>
        <template v-slot:bread-2>
          <nuxt-link to="/user/favor"><span class="px-1">/</span> 收藏商品</nuxt-link>
        </template>
      </Breadcrumb>
      <h2>收藏商品</h2>
      <ProductCard :product-data="FavorProduct" />
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'
import ProductCard from '~/components/product/ProductCard'
import API from '~/api'
import Cookie from 'js-cookie'
import qs from 'querystring'
export default {
  middleware: ['auth'],
  components: { Breadcrumb, ProductCard },
  async asyncData (context) {
    await context.store.dispatch('getFavorProducts')
  },
  computed: {
    FavorProduct () {
      return this.$store.state.favorProductData
    }
  },
  mounted () {
    console.log(this.$store.state.user)
    let exp = Cookie.get('exp')
    if (exp < Date.now()) {
      let refresh_token = Cookie.get('refresh_token')
      this.$axios({
        method: API.member.exchangeToken.method,
        url: API.member.exchangeToken.url,
        baseURL: process.env.google_api_url,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: qs.stringify({
          grant_type: 'refresh_token',
          refresh_token: refresh_token
        })
      }).then(res => {
        Cookie.set('exp', Date.now() + (+res.data.expires_in * 1000))
        Cookie.set('id_token', res.data.id_token)
        Cookie.set('refresh_token', res.data.refresh_token)
      }).catch(err => {
        console.dir(err)
        this.$store.commit('user/setUserLogout')
      })
    }
  }
}
</script>

<style lang="scss">
.user-favor{
  margin-top: 175px;
  h2{
    font-size: 3.75rem;
    color: #000400;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>