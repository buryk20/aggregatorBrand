<template>
  <div class="brand-margin">
    <div class="brand-margin__tag">
      <h3 class="brand-margin__tag-title">Тег (бренд):</h3>
      <input class="brand-margin__input" type="text">
      <button class="brand-margin__tag-btn">
      Применить
      </button>
      <button class="brand-margin__tag-btn-brand">Выберите бренд <img src="/icon/arrow_to_down_icon.svg" alt=""></button>
    </div>
  </div>
</template>

<script>
export default {
name: 'myBrand'
}
</script>

<style lang="scss" scoped>
.brand-margin {
  min-height: 660px;
  &__tag {
    max-width: 1316px;
    width: 100%;
    height: 61px;
    padding-left: 16px;
    border: 1px solid $mainColor;
    border-radius: $borderRadius;
    @include flexCent;
  }
  &__tag-title {
    text-transform: uppercase;
    margin-right: 10px;
  }
  &__input {
    max-width: 221px;
    width: 100%;
    margin-right: 10px;
    border-bottom: 1px solid $mainColor;
  }
  &__tag-btn {
    width: 115px;
    height: 35px;
    margin-right: 55px;
    background-color: $mainColor;
    color: $colorWhite;
    border-radius: $borderRadius;
    @include flexCentrJust;
  }
  &__tag-btn-brand {
    width: 292px;
    height: 35px;
    @include flexCentrJust;
    font-size: 17px;
    text-transform: uppercase;
    background-color: $backgroundColorHov;
  }

}
</style>