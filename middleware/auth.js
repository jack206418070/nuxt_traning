export default function (context) {
  if (process.server) {
    if (!context.req.headers.cookie) return context.redirect('/')
    if (context.req.headers.cookie.indexOf('id_token') == -1) return context.redirect('/')
  }
  if (!context.store.state.user.isUserLogin) return context.redirect('/')
}