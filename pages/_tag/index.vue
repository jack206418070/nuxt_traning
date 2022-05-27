<template>
  <div>
    <h1>商品目錄({{ this.$route.params.tag }})</h1>
    <hr>
    <ul>
      <li><a :href="this.$route.params.tag + '/jack'">jack</a></li>
      <li><a :href="this.$route.params.tag + '/mary'">mary</a></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>