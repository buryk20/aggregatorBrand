<template>
  <button class="brand-margin__tag-dropdown-btn">
    <span class="brand-margin__tag-dropdown-btn-line-r"></span>
    <span class="brand-margin__tag-dropdown-btn-line-l"></span>
  </button>
</template>

<script>
export default {
    name: 'btnCloseDialog'
};
</script>

<style lang="scss">
.brand-margin {
  &__tag-dropdown-btn-line-r {
    position: absolute;
    width: 14px;
    height: 2px;
    background-color: $colorRed;
    transform: rotate(45deg);
    top: 10px;
    left: 4px;
  }
  &__tag-dropdown-btn-line-l {
    position: absolute;
    width: 14px;
    height: 2px;
    background-color: $colorRed;
    transform: rotate(-45deg);
    top: 10px;
    left: 4px;
  }
}
</style>
