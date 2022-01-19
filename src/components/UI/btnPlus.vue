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
    width: 14px;
    height: 2px;
    position: absolute;
    top: 11px;
    left: 5px;
    background-color: $colorWhite;
    transition: 0.3s ease-out;
  }
  &__dash-right {
    width: 14px;
    height: 2px;
    position: absolute;
    top: 11px;
    left: 5px;
    background-color: $colorWhite;
    transform: rotate(90deg);
    transition: 0.3s ease-out;
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