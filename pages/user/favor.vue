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
export default {
  components: { Breadcrumb, ProductCard },
  async asyncData (context) {
    await context.store.dispatch('getFavorProducts')
  },
  computed: {
    FavorProduct () {
      return this.$store.state.favorProductData
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