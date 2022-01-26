<template>
  <div class="drop-dawn-list">
    <h2 class="drop-dawn-list__title">Выберите экспорт</h2>
    <div class="drop-dawn-list__wrp-list">
      <!-- <div class="drop-dawn-list__vertical-line-wrp"> -->
      <div class="drop-dawn-list__vertical-line"></div>
      <!-- </div> -->
      <div class="drop-dawn-list__wrp-list-container">
        <ul class="drop-dawn-list__list">
          <tree-item v-for="item of exportMargins" :key="item.id" :value="item">
          </tree-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import treeItem from './treeItem.vue';
export default {
    name: "dropDownList",
    components:{treeItem},
    data() {
      return {
        exportMargins: [
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "Обычный экспорт", children: ["li Обычный экспорт", "li1 Обычный экспорт", "li2 Обычный экспорт"]},
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт prom", children: ["li Обычный экспорт", "li1 Обычный экспорт"]},
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт rozetka", children: ["li розетка"]},
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт rozetka"},
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт rozetka"},
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт rozetka"},
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт rozetka"},
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт rozetka"}, 
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "Обычный экспорт", children: ["li Обычный экспорт", "li1 Обычный экспорт"]},
        ],
        isActive: false,
        currentId: -1,
        examination: 0
      }
    },
    methods: {
        click(btnId){
            if (this.currentId === btnId) {
                this.currentId = Number.NEGATIVE_INFINITY;
                this.examination = this.btnId
                
            } else {
                this.currentId = btnId;
                this.examination = Number.NEGATIVE_INFINITY;
                this.isActive = true
                // console.log(this.examination);
            }
        }
    }
}
</script>

<style lang="scss">
.drop-dawn-list {
  width: 449px;
  overflow: hidden;
  color: $mainColor;
  &__title {
    width: 100%;
    height: 40px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 400;
    border: 1px solid $mainColor;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  &__wrp-list {
    width: 449px;
    max-width: 100%;
    position: relative;
    @include textUpper;
    border: $borderBlock;
    border-top: 0;
    overflow: auto;
    border-bottom-left-radius: $borderRadius;
    border-bottom-right-radius: $borderRadius;
  }
  &__wrp-list-container {
    height: 387px;
    padding-left: 14px;
  }
  &__list {
    border-left: $borderBlock;
  }
  &__list-btn {
    margin-right: 8px;
    @include btnPlus;
    background-color: #ffffff;
    border: 1px solid $mainColor;
  }
  &__wrp-li {
    display: flex;
    flex-direction: column;
    position: relative;
    padding-left: 8px;
    &::before {
      content: "";
      position: absolute;
      width: 7px;
      height: 1px;
      left: 0;
      top: 31px;
      background-color: $backgroundColorNav;
    }

    &:last-child::after {
      content: "";
      position: absolute;
      width: 2px;
      top: 32px;
      bottom: 0;
      left: -1px;
      background-color: $colorWhite;
    }
  }
  &__list-btn-line-virtical {
    @include dashVertical;
    top: 10px;
    left: 4px;
    background-color: $mainColor;
  }
  &__list-btn-line-horizon {
    @include dashHorizon;
    top: 10px;
    left: 4px;
    background-color: $mainColor;
  }
  &__vertical-line {
    display: none;
    width: 1px;
    height: 106%;
    position: absolute;
    top: 31px;
    bottom: -31px;
    left: 13px;
    background-color: $backgroundColorNav;
    &::after {
      content: "";
      width: 1px;
      height: 37px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #ffffff;
    }
  }
  &__vertical-line-wrp {
    padding: 50px;
  }
  &__wrp-li-btn-wrp {
    height: 64px;
    @include flexCent;
  }
  &__none {
    height: 0;
    min-height: 0;
    opacity: 0;
    z-index: -1;
    transition: 0.3s ease-out;
  }
  &__nested-item {
    height: 0;
    margin-left: 12px;
    padding-left: 43px;
    position: relative;
    @include flexCent;
    border-left: 1px solid $backgroundColorNav;
    transition: 0.3s ease-in;

    &::before {
      content: "";
      width: 1px;
      position: absolute;
      height: 20px;
      top: -20px;
      left: -1px;
      background-color: $backgroundColorNav;
      @include flexCent;
    }
    &:last-child::after {
      content: "";
      position: absolute;
      width: 2px;
      top: 33px;
      bottom: 0;
      left: -1px;
      background-color: $colorWhite;
    }
    &:hover {
      background-color: $backgroundColorHov;
      transition: 0s;
    }
    &:hover .drop-dawn-list__nested-item-btn {
      display: flex;
    }
  }
  &__nested-item-btn {
    padding: 11px;
    position: absolute;
    right: 21px;
    color: $colorWhite;
    display: none;
    background-color: $colorBtn;
    text-transform: uppercase;
    border-radius: $borderRadius;
  }
  &__pseudo-element {
    position: relative;
    &::after {
      content: "";
      width: 25px;
      position: absolute;
      height: 1px;
      top: 0;
      left: -44px;
      background-color: $backgroundColorNav;
    }
  }
}

.activList {
  min-height: 64px;
  height: 100%;
  opacity: 1;
  z-index: 100;
  transition: 0.3s ease-in;
}

.activBtn {
  transform: rotate(180deg);
  transition: 0.3s ease-in;
}

.activItem {
  height: 64px;
  transition: 0.3s ease-in;
}
</style>