<template>
  <div>
    <h1>商品</h1>
    <hr>
    <div v-if="this.$route.params.id">
      商品ＩＤ：{{ this.$route.params.id }}
    </div>
  </div>
</template>

<script>
export default {
  validate ({params}) {
    return /^\d+$/.test(params.id)
  }
}
</script>