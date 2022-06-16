export default function ({ $axios, redirect, error }) {
  $axios.setBaseURL(process.env.api_url)

  $axios.onRequest(config => {
    config.params = {
      key: process.env.firebaseApiKey
    }
  })
  $axios.onResponse(config => {

  })
  $axios.onError(data => {
    const code = parseInt(data.response && data.response.status)
    if (code === 500) {
      error('500')
    }
  })
}