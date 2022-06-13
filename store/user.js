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
  user_logout: (state, payload) => {
    state.isUserLogin = false
  },
  setUserLogin: (state, payload) => {
    state.isUserLogin = true;
    state.userPicture = payload.userPicture || "https://bulma.io/images/placeholders/128x128.png";
    state.userName = payload.userName;
    state.userUid = payload.userUid;
  }
}