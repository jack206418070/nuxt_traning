<template>
  <div class="home">
    <div class="container">
      <Breadcrumb></Breadcrumb>
    </div>
  </div>
</template>

<script>
import { sleep } from '~/assets/js/tool'
import Breadcrumb from '~/components/Breadcrumb'
export default {
  async asyncData () {
    await sleep(1000)
  },
  components: { Breadcrumb }
}
</script>

<style lang="scss">
.home{
  margin-top: 145px;
}
</style>