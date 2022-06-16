<template>
  <div class="container">
    <div class="user">
      <Breadcrumb>
        <template v-slot:bread-1>
          <nuxt-link to="/user"><span class="px-1">/</span> 會員專區</nuxt-link>
        </template>
      </Breadcrumb>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'
export default {
  middleware: ['auth'],
  components: { Breadcrumb }
}
</script>

<style lang="scss">
.user{
  margin-top: 175px;
}
</style>