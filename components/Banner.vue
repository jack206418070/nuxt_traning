<template>
  <div class="banner d-flex flex-dir-col jy-content-center">
    <h2 class="mb-5">
      <slot name="title"></slot>
    </h2>
    <p>
      <slot name="desc"></slot>
    </p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .banner{
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
    h2, p{
      color: #fff;
      letter-spacing: 1.3px;
      text-align: center;
    }
    h2{
      font-size: 3.75rem;
      font-weight: bold;
    }
    p{
      font-size: 1.2rem;
    }
  }
</style>