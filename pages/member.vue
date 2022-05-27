<template>
  <div>
    <h1>會員清單</h1>
    <ul>
      <li v-for="item in member" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      member: []
    }
  },
  methods: {
    async getMember () {
      let data = await this.$axios.$get('https://intense-depths-79092.herokuapp.com/api/member');
      this.member = data;
    }
  },
  mounted () {
    this.getMember();
  }
}
</script>