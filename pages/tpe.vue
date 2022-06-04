<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import { sleep, deepCopy } from '~/assets/js/tool'
import test from '~/assets/js/test'

export default {
  layout: 'tpeLayout',
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My cust description'
        }
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.8.2/firebase-app.js' }
      ]
    }
  },
  data () {
    return {
      title: '這是測試頁面'
    }
  },
  created () {
    console.log(sleep, deepCopy)
    console.log(test.test1('jack'))
  },
  mounted () {
    console.log(this.title)
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/demo.scss';
</style>