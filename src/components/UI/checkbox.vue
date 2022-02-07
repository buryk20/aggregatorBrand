<template>
  <input
    type="checkbox"
    class="custom-checkbox"
    v-bind:id="arrBrs"
    v-model="checkboxExport"
    @click="isActivCheckBox"
  />
  <label v-bind:for="arrBrs"></label>
</template>

<script>
export default {
    name: 'myCheckbox',
    data(){
      return {
          myCheckboxExport: true,
          myCheckbox: false
      }
    },
    props: {
      arrBrs: Number
    },
    methods: {
      isActivCheckBox(){
        if(this.myCheckboxExport) {
          this.myCheckbox = true;
          this.myCheckboxExport = false;
          this.$emit('myCheckbox', this.myCheckbox)
        } else {
          this.myCheckbox = false;
          this.myCheckboxExport = true;
          this.$emit('myCheckbox', this.myCheckbox)
        }
      }
  }
}
</script>

<style lang="scss">
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
  &__text {
    @include textUpper;
    padding-left: 10px;
  }

  &__text-style {
    padding-left: 10px;
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
</style>