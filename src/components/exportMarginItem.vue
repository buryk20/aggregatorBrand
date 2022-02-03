<template>
  <div v-for="exportBr of exportBrs"
          :key="exportBr.id" class="margim-item">
    <div class="margim-item__list">
      <div class="margim-item__list-source-wrp">
        <input
          type="checkbox"
          class="custom-checkbox"
          v-bind:id="exportBr.id"
          v-model="checkboxExport"
          @click="isActivCheckBox"
        />
        <label  v-bind:for="exportBr.id"></label>
        <div><btn-delete> </btn-delete></div>
        <div class="margim-item__list-source">
          <p class="margim-item__list-source-text">dfscvdfv</p>
        </div>
      </div>
      <btn-plus v-bind:checkbox="checkbox"> </btn-plus>
    </div>
  </div>
</template>

<script>
import btnPlus from "./UI/btnPlus.vue";
export default {
  components: {
    btnPlus,
  },
  data() {
      return {
          checkboxExport: true,
          checkbox: false
      }
  },
  props: {
    exportBrs: Array
  },
  methods: {
      isActivCheckBox(){
        console.log(this.checkboxExport);
        if(this.checkboxExport) {
          this.checkbox = true
        } else {
          this.checkbox = false
        }
      }
  }
};
</script>

<style lang="scss">
.margim-item {
  padding-top: 5px;
  &__list {
    padding-left: 5px;
    padding-top: 5px;
    margin-bottom: 5px;
    @include flexCent;
    align-items: baseline;
  }
  &__list-source {
    max-width: 272px;
    width: 100%;
    height: 34px;
    @include flexCent;
    //   align-items: baseline;
    border: 1px solid $colorGrey;
    border-radius: $borderRadius;
  }
  &__list-source-wrp {
    width: 40%;
    @include flexCent;
  }
  &__list-source-text {
    padding: 0 5px;
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
  margin-right: 5px;
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
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  border: 1px solid $mainColor;
}
.custom-checkbox:checked + label::before {
  background-color: $mainColor;
  background-image: url("/icon/check-mark-all-brand-icon.svg");
}

.a {
  opacity: 0.5;
}
</style>
