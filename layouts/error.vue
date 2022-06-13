<template>
  <div>
    <h1 v-if="error.statusCode === 404">頁面不存在</h1>
    <h1 v-else>應用發生異常</h1>
    <nuxt-link to="/">首頁</nuxt-link>
  </div>
</template>

<script>
export default {
  props:['error'],
  layout: 'error_layout'
}
</script>