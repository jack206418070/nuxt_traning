<template>
  <div class="product-block">
    <div v-for="item in data" :key="item" class="product-card">
      <div class="card-img">
        <img src="~/assets/images/有機豆腐.jpeg" alt="有機豆腐">
      </div>
      <div class="card-desc">
        <h3>有機豆腐</h3>
        <p>400g/入</p>
        <p>NT$60</p>
      </div>
      <div class="card-footer">
        <button type="button">加入購物籃</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['productData'],
  data () {
    return {
      data: 0
    }
  },
  mounted () {
    this.data = +this.productData;
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
}
.product-block{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: -15px;
  margin-left: -15px;
}
.product-card{
  flex: 0 0 20%;
  padding: 0 15px;
  margin-bottom: 20px;
  .card-img{
    margin-bottom: 10px;
  }
  img{
    width: 100%;
    object-fit: cover;
  }
  .card-desc{
    letter-spacing: 1.2px;
    h3{
      font-size: 20px;
      color: #29211b;
      margin-bottom: 10px;
    }
    p{
      color: rgba(41,33,27,.7);
      margin-bottom: 10px;
    }
  }
  button{
    outline: 0;
    border: 0;
    cursor: pointer;
    width: 100%;
    padding: 10px 0;
    background-color: #ecf4eb;
    color: #499537;
    transition: .5s;
    &:hover{
      background-color: #499537;
      color: #fff;
      box-shadow: 0 2px 15px 0 rgba(73,149,55,0.5);
    }
  }
}
</style>