<template>
  <div class="export-margin">
    <div class="export-margin__unloading">
      <h2 class="export-margin__title">Выгрузки</h2>
      <drop-down-list></drop-down-list>
      <div class="checkbox-wrp">
        <my-checkbox>
          <input
          type="checkbox"
          class="custom-checkbox"
          id="checkbox"
          v-model="checkbox"
        />
        </my-checkbox>
        <label class="custom-checkbox__text" for="checkbox"
          >Выбрать все экспорты</label
        >
      </div>

      <div v-if="checkbox" class="export-margin__btn-pus-wrp">
        <btn-plus></btn-plus>
      </div>
    </div>
    <div class="export-margin__margin">
      <h2 class="export-margin__title">Наценка</h2>
      <div class="export-margin__container">
        <export-margin-item></export-margin-item>
      </div>
    </div>
  </div>
</template>

<script>

import dropDownList from './dropDownList.vue'
import allExportsCheckbox from './UI/allExportsCheckbox.vue'
import btnPlus from './UI/btnPlus.vue'
import exportMarginItem from './exportMarginItem.vue'

export default {
    name: "exportMargin",
    components: {
      dropDownList,
      allExportsCheckbox,
      btnPlus,
      exportMarginItem
    },
    data() {
      return {
        checkbox: false

      }
    }
}
</script>

<style lang="scss" scoped>
.export-margin {
  min-height: 660px;
  color: $mainColor;
  @include flexSpasBit;
  @include contentGrid;
  @include magCent;
  &__unloading {
    max-width: 450px;
    width: 100%;
    margin-right: 10px;
  }
  &__title {
    margin-bottom: $magButt;
    font-size: 17px;
    width: 600;
    text-align: left;
  }
  &__btn-pus-wrp {
    display: flex;
    flex-wrap: wrap;
  }
  &__container {
    max-width: 857px;
    width: 100%;
    border: $borderBlock;
    border-radius: $borderRadius;
  }
  &__margin {
    width: 100%;
  }
}
</style>