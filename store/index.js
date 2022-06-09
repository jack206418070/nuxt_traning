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
  async getProducts (context, payload) {
    let res = await this.$axios.get('http://127.0.0.1:3000/api/products')
    const productData = res.data.productData
      //把拿到的 data 用 mutations 加入
    context.commit('add_product', { name: 'productData', value: productData })
    return productData
  },
  async getFavorProducts (context, payload) {
    let data = await this.$axios('/api/products')
    const productData = data.data.productData.filter(item => item.favor === true)
    context.commit('add_product', { name: 'favorProductData', value: productData })
    return productData
  }
}