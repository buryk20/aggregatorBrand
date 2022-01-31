<template>
  <div class="markup-category">
    <button class="markup-category__btn">Выбор категории</button>
  </div>
</template>

<script>
export default {
    name: 'markupPerCategory'
}
</script>

<style lang="scss" scoped>
.markup-category {
  height: 660px;
  &__btn {
    width: 389px;
    height: 48px;
    @include flexCentrJust;
    background-color: $mainColor;
    color: $colorWhite;
    text-transform: uppercase;
    border-radius: $borderRadius;
  }
}
</style>