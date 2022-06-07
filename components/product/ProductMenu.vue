<template>
    <ul class="product-menu d-flex jy-content-between">
      <li class="menu-item">
        <nuxt-link to="/">
          <img src="~/assets/images/icons1.png"/>
          <h4>主打活動</h4>
        </nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link to="/">
          <img src="~/assets/images/icons2.png"/>
          <h4>蛋豆奶類</h4>
        </nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link to="/">
          <img src="~/assets/images/icons3.png"/>
          <h4>當季蔬果</h4>
        </nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link to="/">
          <img src="~/assets/images/icons4.png"/>
          <h4>嚴選肉品</h4>
        </nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link to="/">
          <img src="~/assets/images/icons5.png"/>
          <h4>季節水產</h4>
        </nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link to="/">
          <img src="~/assets/images/icons6.png"/>
          <h4>日常乾貨</h4>
        </nuxt-link>
      </li>
      <li class="menu-item">
        <nuxt-link to="/">
          <img src="~/assets/images/icons7.png"/>
          <h4>精選禮盒</h4>
        </nuxt-link>
      </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  *{
    box-sizing: border-box;
  }
  .product-menu{
    background-color: rgba(73,149,55,.03);
    padding: 0 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 80px;
    .menu-item{
      flex: 0 0 14%;
      a{
        display: block;
        color: rgba(41,33,27,.9);
        font-size: 18px;
        padding: 30px 0;
        text-align: center;
        position: relative;
        &:before{
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background-color: rgba(73,149,55,.1);
          padding: 0px;
          transition: all .3s;
        }
        &:hover{
          &:before{
            padding: 60px;
          }
        }
        img{
          width: 50px;
          height: 50px;
          display: block;
          object-fit: cover;
          margin: 0 auto;
        }
        h4{
          margin-top: 12px;
        }
      }
    }
  }
</style>