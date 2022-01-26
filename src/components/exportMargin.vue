<template>
  <div class="export-margin">
    <div class="export-margin__unloading">
      <h2 class="export-margin__title">Выгрузки</h2>
      <drop-down-list></drop-down-list>
      <div class="checkbox-wrp">
        <input
          type="checkbox"
          class="custom-checkbox"
          id="checkbox"
          v-model="checkbox"
        />

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
    </div>
  </div>
</template>

<script>

import dropDownList from './dropDownList.vue'
import allExportsCheckbox from './UI/allExportsCheckbox.vue'
import btnPlus from './UI/btnPlus.vue'

export default {
    name: "exportMargin",
    components: {
      dropDownList,
      allExportsCheckbox,
      btnPlus
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
  &__btn-pus-wrp {
    // display: none;
  }
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
  &__text {
    @include textUpper;
  }
}
.checkbox-wrp {
  padding-top: 24px;
  margin-bottom: 24px;
  position: relative;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: $borderRadius;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  border: 1px solid $mainColor;
}
.custom-checkbox:checked + label::before {
  background-color: $mainColor;
  background-image: url("/icon/check-mark-all-brand-icon.svg");
}
</style>