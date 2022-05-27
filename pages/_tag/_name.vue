<template>
  <div>
    <h1>商品詳細資料</h1>
    <hr>
    <div v-if="this.$route.params.name">
      商品名稱：{{ this.$route.params.tag }} / {{ this.$route.params.name }}
    </div>
  </div>
</template>