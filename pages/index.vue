<template>
  <div class="home">
    <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
      <div class="swiper-wrapper">
        <div class="swiper-slide">slider1</div>
        <div class="swiper-slide">slider2</div>
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
export default {
  async asyncData() {
    await sleep(1000);
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: true
      }
    }
  },
  components: { Breadcrumb },
}
</script>

<style lang="scss">
.home {
  margin-top: 175px;
}
.swiperWrap{
  border:1px solid red;
  .swiper-slide{
    border:1px solid green;
    height: 300px;
    img{
      width:100%;
      height:100%;
    }
  }
}
</style>