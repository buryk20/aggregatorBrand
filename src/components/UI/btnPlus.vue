<template></template>

<script>
export default {
 name: 'my-btn-plus'
}
</script>

<style lang="scss">
.btnPlus {
  @include btnPlus;
  position: relative;
  &__dash-left {
    @include dashHorizon;
    background-color: $colorWhite;
  }
  &__dash-right {
    @include dashVertical;
    background-color: $colorWhite;
  }
  &:hover &__dash-left {
    transform: rotate(90deg);
    transition: 0.3s ease-in;
  }
  &:hover &__dash-right {
    transform: rotate(180deg);
    transition: 0.3s ease-in;
  }
}
</style>