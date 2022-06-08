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
      <ProductCard :product-data="data"></ProductCard>
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
  async asyncData () {
    await sleep(1000)
  },
  data () {
    return {
      title: '這是測試頁面',
      data: []
    }
  },
  watch: {
    $route (to, from) {
      this.getProduct()
    }
  },
  methods: {
    getProduct () {
      if(this.$route.query.type === 'favor') {
        this.data = this.$store.getters.get_favorProduct
      } else {
        this.data = this.$store.state.productData
      }
      console.log(this.data)
    }
  },
  created () {
    this.getProduct()
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