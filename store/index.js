import jwtDecode from 'jwt-decode'
import API from '~/api'
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
      let res = await this.$axios({
        method: API.getProducts.method,
        url: API.getProducts.url
      })
      let productData = []
      for (let key in res.data) {
        productData.push({
          id: key,
          ...res.data[key]
        })
      }
      //把拿到的 data 用 mutations 加入
      commit('add_product', { name: 'productData', value: productData })
    } catch (error) {
      $nuxt.error({ statusCode: 500, message: '應用程式出現錯誤' })
    }
  },
  async getFavorProducts ({ commit }) {
    try {
      let res = await this.$axios({
        method: API.getFavorProducts.method,
        url: API.getFavorProducts.url
      })
      let productData = []
      for (let key in res.data) {
        productData.push({
          id: key,
          ...res.data[key]
        })
      }
      commit('add_product', { name: 'favorProductData', value: productData })
    } catch (error) {
      $nuxt.error({ statusCode: 500, message: '應用程式出現錯誤' })
    }
  },
  nuxtServerInit: ({ commit }, context) => {
    if (context.query.id_token && context.query.refresh_token) {
      let id_token_decode = jwtDecode(context.query.id_token)
      commit('user/setUserLogin', {
        id_token: context.query.id_token,
        refresh_token: context.query.refresh_token,
        userUid: id_token_decode.user_id,
        userPicture: id_token_decode.picture,
        userName: id_token_decode.name
      })
      // console.log(context.res.setHeader)
      context.res.setHeader('Set-Cookie', [
        `id_token=${context.query.id_token}`,
        `refresh_token=${context.query.id_token}`,
        `userUid=${id_token_decode.user_id}`,
        `userPicture=${id_token_decode.picture}`,
        `userName=${escape(id_token_decode.name)}`
      ])
      return
    }
    if(!!context.req.headers.cookie){
      if(context.req.headers.cookie.indexOf("id_token=")>-1){
        //nuxtServerInit 取得 cookie的方式和前端不同
        let picture = decodeURI(context.req.headers.cookie.split("userPicture=")[1].split(" ")[0].replace(';', ''))
        let name = decodeURI(unescape(context.req.headers.cookie.split("userName=")[1].split(" ")[0].replace(';', '')))
        let uid = decodeURI(context.req.headers.cookie.split("userUid=")[1].split(" ")[0].replace(';', ''))
        commit('user/setUserLogin',{
          userPicture: picture,
          userName: name,
          userUid : uid
        })
      }
    }
   
  }
}