<template>
  <div class="brand-markup">
    <my-nav-brand></my-nav-brand>
  </div>
</template>

<script>
import myNavBrand from "./components/navBrand.vue"
export default {
  components: {
    myNavBrand
  }
}
</script>

<style lang="scss" scoped>
.brand-markup {
  font-family: $font;
  @include contentGrid;
  @include marginCentre;
}
</style>
