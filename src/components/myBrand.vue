<template>
  <div class="brand-margin">
    <div class="brand-margin__tag">
      <h3 class="brand-margin__tag-title">Тег (бренд):</h3>
      <input class="brand-margin__input" type="text" />
      <button class="brand-margin__tag-btn">Применить</button>
      <div>
        <div class="brand-margin__tag-btn-brand-wrp">
          <button @click="show" class="brand-margin__tag-btn-brand">
            Выберите бренд
            <img
              class="brand-margin__tag-btn-brand-icon"
              src="/icon/arrow_to_down_icon.svg"
              alt=""
            />
          </button>
          <div
            :class="{ isActivDropdown: isActive }"
            class="brand-margin__tag-dropdown-wrp"
          >
            <div class="brand-margin__tag-dropdown">
              <img src="/icon/search_icon_brend.svg" alt="" />
              <input class="brand-margin__tag-dropdown-input" type="text" />
              <button @click="show" class="brand-margin__tag-dropdown-btn">
                <span class="brand-margin__tag-dropdown-btn-line-r"></span>
                <span class="brand-margin__tag-dropdown-btn-line-l"></span>
              </button>
            </div>
            <div class="brand-margin__tag-dropdown-item-wrp">
              <p
                v-for="brend in brends"
                :key="brend.id"
                class="brand-margin__tag-dropdown-item-text"
              >
                {{ brend.title }}
              </p>
            </div>
          </div>
          <!-- <option disabled value=""></option>
          <option v-for="brend in brends" :key="brend.id" value="">
            {{ brend.title }}
          </option> -->
        </div>
      </div>
    </div>
    <div class="brand-margin__cont-wrp">
      <div class="brand-margin__cont">
        <div class="brand-margin__total-export">
          <btn-delete class="brand-margin__cont-btn-del"></btn-delete>
          <p class="brand-margin__total-brend-text">Бренд</p>
          <button @click="showDial" class="brand-margin__total-brend-btn">
            Выбор экспорта
          </button>
        </div>
        <div class="brand-margin__list-marim">
          <btn-plus></btn-plus>
        </div>
      </div>
    </div>
    <dialog-export v-model:showDialog="dialogVisible">
      <drop-down-list></drop-down-list>
    </dialog-export>
  </div>
</template>

<script>

import dropDownList from './dropDownList.vue'
import btnPlus from './UI/btnPlus.vue'
export default {
  name: 'myBrand',
  components: {
    dropDownList,
    btnPlus
  },
  data(){
    return {
      brends: [
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "rozetka"}
      ],
      isActive: false,
      dialogVisible: false
    }
  },
  methods: {
    show() {
      if(this.isActive) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    },
    showDial() {
      this.dialogVisible = true
    }
  }
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
    @include blockUppercase;
    margin-right: 10px;
  }
  &__input {
    max-width: 221px;
    width: 100%;
    margin-right: 10px;
    border-bottom: 1px solid $mainColor;
  }
  &__tag-btn {
    @include btnBrandAdd;
    margin-right: 55px;
  }
  &__tag-btn-brand {
    width: 292px;
    height: 35px;
    @include flexCentrJust;
    font-size: 17px;
    text-transform: uppercase;
    background-color: $backgroundColorHov;
    border-radius: $borderRadius;
  }
  &__tag-dropdown {
    width: 100%;
    height: 40px;
    padding: 0 16px;
    @include flexCent;
    justify-content: space-between;
    background-color: $colorWhite;
    border: 1px solid $mainColor;
    border-top-left-radius: $borderRadius;
    border-top-right-radius: $borderRadius;
  }
  &__tag-dropdown-wrp {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
  &__tag-btn-brand-wrp {
    position: relative;
  }
  &__tag-dropdown-input {
    width: 172px;
    border-bottom: 1px solid $backgroundColorNav;
  }
  &__tag-dropdown-btn {
    width: 24px;
    height: 24px;
    border: 1px solid $colorRed;
    border-radius: $borderRadius;
    position: relative;
  }
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
  &__tag-dropdown-item-wrp {
    border: 1px solid $backgroundColorNav;
    border-top: 0;
    max-height: 347px;
    overflow: auto;
    border-bottom-left-radius: $borderRadius;
    border-bottom-right-radius: $borderRadius;
    background-color: $colorWhite;
  }
  &__tag-btn-brand-icon {
    padding-left: 10px;
  }
  &__tag-dropdown-item-text {
    height: 48px;
    padding-left: 20px;
    @include flexCent;
    font-size: 17px;
    text-transform: uppercase;
    &:hover {
      background-color: $backgroundColorHov;
    }
  }
  &__cont-wrp {
    max-width: 1316px;
    width: 100%;
    border: 1px solid $backgroundColorNav;
    border-radius: $borderRadius;
  }
  &__cont {
    border-bottom: 1px solid $backgroundColorNav;
    @include flexCent;
    align-items: baseline;
  }
  &__cont-btn-del {
  }
  &__total-export {
    width: 48%;
    padding-top: 10px;
    padding-left: 10px;
    @include flexCent;
  }
  &__total-brend-text {
    margin-right: 16px;
    @include blockUppercase;
  }
  &__total-brend-btn {
    @include btnBrandAdd;
  }
  &__list-marim {
    display: flex;
  }
}
.isActivDropdown {
  display: block;
}
</style>