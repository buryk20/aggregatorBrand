<template>
  <div class="bnt-del">
    <span class="bnt-del__dash-left"></span>
    <span class="bnt-del__dash-right"></span>
  </div>
  <slot></slot>
</template>

<script>
export default {
 name: 'btnDelete'
}
</script>

<style lang="scss">
.bnt-del {
  width: 24px;
  height: 24px;
  margin-right: 5px;
  position: relative;
  border: $borderBlock;
  border-radius: $borderRadius;
  cursor: pointer;
  background-color: $colorWhite;
  &__dash-left {
    @include dashVertical;
    width: 15px;
    left: 4px;
    top: 10px;
    background-color: $mainColor;
    transform: rotate(45deg);
  }
  &__dash-right {
    @include dashVertical;
    width: 15px;
    left: 4px;
    top: 10px;
    background-color: $mainColor;
    transform: rotate(-45deg);
  }
}
</style>