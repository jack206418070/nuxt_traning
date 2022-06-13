export const state = () => ({
  productData: [],
  favorProductData: []
})
// getter 可以做資料處理
export const getters = {
}

export const mutations = {
  add_product: (state, { name, value }) => {
    state[name] = value
  }
}

export const actions = {
  async getProducts ({ commit }) {
    try {
      let res = await this.$axios.get('http://127.0.0.1:3000/api/products')
      const productData = res.data.productData
      //把拿到的 data 用 mutations 加入
      commit('add_product', { name: 'productData', value: productData })
      return productData
    } catch (error) {
      this.$nuxt.error({ statusCode: 500, message: '應用程式出現錯誤' })
    }
  },
  async getFavorProducts ({ commit }) {
    try {
      let data = await this.$axios('http://127.0.0.1:3000/api/products')
      const productData = data.data.productData.filter(item => item.favor === true)
      commit('add_product', { name: 'favorProductData', value: productData })
      return productData
    } catch (error) {
      this.$nuxt.error({ statusCode: 500, message: '應用程式出現錯誤' })
    }
  }
}