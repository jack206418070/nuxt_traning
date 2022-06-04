<template>
  <div>
    <header>
      <h1>GinJack Nuxt Demo 模板</h1>
      <nuxt-link to="/">首頁</nuxt-link>
      <nuxt-link to="/member">about</nuxt-link>
      <nuxt-link to="/article">文章</nuxt-link>
      <nuxt-link to="/tpe">文章</nuxt-link>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: '4'
    }
  }
}
</script>
