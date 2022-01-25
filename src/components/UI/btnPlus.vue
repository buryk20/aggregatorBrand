<template>
  <div class="markup-all-price">
    <div class="bnt-del">
      <span class="bnt-del__dash-left"></span>
      <span class="bnt-del__dash-right"></span>
    </div>
    <div class="margin">
      <input
        class="margin__price"
        type="number"
        name="margin"
        placeholder="1000"
      />
      <div>
        <select class="margin__list-wrp" v-model="selected">
          <option
            v-for="item in items"
            v-bind:key="item.id"
            v-bind:value="item.value"
          >
            {{ item.title }}
          </option>
          <span class="margin__currency"> {{ selected }} </span>
        </select>
      </div>
    </div>
    <div class="btn-plus">
      <span class="btn-plus__dash-left"></span>
      <span class="btn-plus__dash-right"></span>
    </div>
  </div>
</template>

<script>
export default {
 name: 'my-btn-plus',
 data() {
   return {
     items: [{
        id: 1,
        title: '%',
        value: 1,
      }, {
        id: 2,
        title: 'Грн',
        value: 2,
      },
      {id: 3,
        title: '%',
        value: 3,
      },
      {id: 4,
        title: '-Грн',
        value: 4,
      }, ],
      selected: '2',
   }
 }
}
</script>

<style lang="scss" scoped>
.markup-all-price {
  @include flexCent;
}
.bnt-del {
  width: 24px;
  height: 24px;
  margin-right: 5px;
  position: relative;
  border: $borderBlock;
  border-radius: $borderRadius;
  cursor: pointer;
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
.btn-plus {
  @include btnPlus;
  position: relative;
  &__dash-left {
    @include dashHorizon;
    background-color: $colorWhite;
  }
  &__dash-right {
    @include dashVertical;
    background-color: $colorWhite;
  }
  &:hover &__dash-left {
    transform: rotate(90deg);
    transition: 0.3s ease-in;
  }
  &:hover &__dash-right {
    transform: rotate(180deg);
    transition: 0.3s ease-in;
  }
}

.margin {
  margin-right: 5px;
  display: flex;
  &__price {
    width: 61px;
    height: 34px;
    padding-left: 11px;
    margin-right: 5px;
    border: $borderBlock;
    @include flexCentrJust;
    border-radius: $borderRadius;
  }
  &__list-wrp {
    height: 34px;
    border: $borderBlock;
    border-radius: $borderRadius;
    color: $colorBlack;
    text-transform: uppercase;
  }
  &__currency {
    color: $colorBlack;
    text-transform: uppercase;
  }
}
option {
  border-radius: 8px;
}
</style>