import Cookie from 'js-cookie'

export const state = () => ({
  isUserLogin: false,
  userPicture: '',
  userName: '',
  userUid: ''
})

export const mutations = {
  user_login: (state, payload) => {
    state.isUserLogin = true
  },
  setUserLogin: (state, payload) => {
    state.isUserLogin = true
    state.userPicture = payload.userPicture || "https://bulma.io/images/placeholders/128x128.png"
    state.userName = payload.userName
    state.userUid = payload.userUid

    Cookie.set('id_token', payload.id_token)
    Cookie.set('refresh_token', payload.refresh_token)
    Cookie.set('userUid', payload.userUid)
    Cookie.set('userPicture', payload.userPicture)
    Cookie.set('userName', payload.userName)
  },
  setUserLogout: (state, payload) => {
    state.isUserLogin = false
    state.userPicture = ''
    state.userName = ''
    state.userUid = ''
    Cookie.remove('id_token')
    Cookie.remove('refresh_token')
    Cookie.remove('userUid')
    Cookie.remove('userPicture')
    Cookie.remove('userName')
    $nuxt.$router.push({ name: 'index' })
  }
}