<template>
  <div class="bread">
    <nuxt-link to="/">
      <fa :icon="['fa', 'home']" />
      Home
    </nuxt-link>
    <slot name="bread-1"></slot>
    <slot name="bread-2"></slot>
    <slot name="bread-3"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .bread{
    padding: 10px 0;
    color: #918e8a;
    display: flex;
    a{
      font-size: 14px;
      letter-spacing: 1.3px;
      transition: .3s;
      opacity: .8;
      display: flex;
      align-items: center;
      svg {
        padding-right: 5px;
      }
      &:hover{
        color: #499537;
        opacity: 1;
        span{
          color: #918e8a;
        }
      }
    }
  }
</style>