<template>
  <div class="product">
    <Banner image="@/assets/images/product-banner.jpeg">
      <template v-slot:title>當季蔬果</template>
      <template v-slot:desc>產地直送，冷藏不斷的運送過程，完全保留鮮採的營養與美味</template>
    </Banner>
    <div class="container">
      <Breadcrumb>
        <template v-slot:bread-1>
          <nuxt-link to="/product"><span class="px-1">/</span> 當季蔬果</nuxt-link>
        </template>
      </Breadcrumb>
      <ProductMenu></ProductMenu>
      <ProductCard :product-data="productData"></ProductCard>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/Banner'
import Breadcrumb from '~/components/Breadcrumb'
import ProductMenu from '~/components/product/ProductMenu'
import ProductCard from '~/components/product/ProductCard'
import { sleep } from '~/assets/js/tool'
export default {
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My cust description'
        }
      ]
    }
  },
  transition: 'product',
  components: { Banner, Breadcrumb, ProductMenu, ProductCard },
  async asyncData (context) {
    await context.store.dispatch('getProducts')
  },
  data () {
    return {
      title: '什麼都賣什麼都不奇怪'
    }
  },
  computed: {
    productData () {
      return this.$store.state.productData
    }
  }
}
</script>

<style lang="scss">
  .product{
    margin-top: 155px;
    .banner{
      background-image: url('@/assets/images/product-banner.jpeg');
    }
  }
</style>