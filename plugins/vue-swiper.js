import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
export default () => {
  Vue.use(VueAwesomeSwiper)
}
import Swiper2, { Autoplay, Pagination } from 'swiper'
Swiper2.use([Autoplay, Pagination])