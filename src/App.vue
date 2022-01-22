<template>
  <div class="brand-markup">
    <my-nav-brand></my-nav-brand>
    <btn-plus>
      <slot>
        <div class="btnPlus">
          <span class="btnPlus__dash-left"></span>
          <span class="btnPlus__dash-right"></span>
        </div>
      </slot>
    </btn-plus>
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
}
</style>
