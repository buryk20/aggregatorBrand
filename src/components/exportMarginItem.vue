<template>
  <div class="margim-item">
    <div class="margim-item__list">
      <div class="margim-item__list-source-wrp">
        <my-checkbox>
          <input
            type="checkbox"
            class="custom-checkbox"
            id="checkboxExport"
            v-model="checkboxExport"
          />
          <label for="checkboxExport"></label>
        </my-checkbox>
        <btn-delete> </btn-delete>
        <div class="margim-item__list-source">
          <p class="margim-item__list-source-text">dfscvdfv</p>
        </div>
      </div>
      <btn-plus v-bind:checkboxExport="checkboxExport"> </btn-plus>
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
          checkboxExport: true
      }
  },
  methods: {
      isActivCheckBox(){
        //   checkboxExport = false
          console.log(checkboxExport);
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
    border: $borderBlock;
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
.a {
  opacity: 0.5;
}
</style>
