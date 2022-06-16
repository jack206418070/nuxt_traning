<template>
  <div class="home">
    <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="~/assets/images/home-banner.jpeg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~/assets/images/home-banner2.jpeg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~/assets/images/home-banner3.jpeg" alt="">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
    <div class="container">
      <Breadcrumb></Breadcrumb>
    </div>
  </div>
</template>

<script>
import { sleep } from "~/assets/js/tool";
import Breadcrumb from "~/components/Breadcrumb";
import API from '~/api'
export default {
  async asyncData() {
    await sleep(1000);
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 1,
        loopAdditionalSlides: 2,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true
      }
    }
  },
  components: { Breadcrumb },
  created () {
    if (process.client) {
      this.$axios({
        method: 'post',
        url: API.member.exchangeToken.url,
        headers: { 'Content-Type': 'application/json' },
        data: {}
      }).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.dir(err)
      })
    }
  }
}
</script>

<style lang="scss">
.home {
  margin-top: 175px;
}
.swiperWrap{
  width: 66.7%;
  overflow: visible;
  .swiper-slide{
    height: 400px;
    transition: .3s;
    img{
      width:100%;
      height:100%;
      object-fit: cover;
    }
    &.swiper-slide-prev{
      opacity: 0.3;
    }
    &.swiper-slide-next{
      opacity: 0.3;
    }
    &.swiper-slide-active{
      opacity: 1;
    }
  }
  .swiper-pagination-bullet{
    width: 80px;
    height: 5px;
    background-color: #499537;
    border-radius: 0;
  }
}
</style>