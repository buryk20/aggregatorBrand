<template>
  <div class="export-margin">
    <div class="export-margin__unloading">
      <h2 class="export-margin__title">Выгрузки</h2>
      <drop-down-list></drop-down-list>
    </div>
    <div class="export-margin__margin">
      <h2 class="export-margin__title">Наценка</h2>
    </div>
  </div>
</template>

<script>

import dropDownList from './dropDownList.vue'

export default {
    name: "exportMargin",
    components: {
      dropDownList
    }
}
</script>

<style lang="scss" scoped>
.export-margin {
  color: $mainColor;
  @include flexSpasBit;
  @include contentGrid;
  @include magCent;
  &__unloading {
    max-width: 450px;
    width: 100%;
  }
  &__title {
    margin-bottom: $magButt;
    font-size: 17px;
    width: 600;
    text-align: left;
  }
}
</style>