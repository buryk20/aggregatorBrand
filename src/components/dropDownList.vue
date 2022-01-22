<template>
  <div class="drop-dawn-list">
    <h2 class="drop-dawn-list__title">Выберите экспорт</h2>
    <div class="drop-dawn-list__wrp-list">
      <!-- <div class="drop-dawn-list__vertical-line-wrp"> -->
      <div class="drop-dawn-list__vertical-line"></div>
      <!-- </div> -->
      <div class="drop-dawn-list__wrp-list-container">
        <ul class="drop-dawn-list__list">
          <li
            v-for="(exportMargin, index) of exportMargins"
            :key="exportMargin.id"
            class="drop-dawn-list__wrp-li"
          >
            <div class="drop-dawn-list__wrp-li-btn-wrp asf">
              <button @click="click(index)" class="drop-dawn-list__list-btn">
                <span
                  :class="{ activBtn: index === currentId && examination }"
                  class="drop-dawn-list__list-btn-line-virtical"
                ></span>
                <span class="drop-dawn-list__list-btn-line-horizon"></span>
              </button>
              <p>{{ exportMargin.title }}</p>
            </div>
            <ul
              class="drop-dawn-list__none"
              :class="{ activList: index === currentId && examination }"
            >
              <li
                v-if="exportMargin.export != undefined"
                :class="{ activItem: index === currentId && examination }"
                class="drop-dawn-list__nested-item"
              >
                {{ exportMargin.export }}
              </li>
              <li
                v-if="exportMargin.export1 != undefined"
                :class="{ activItem: index === currentId && examination }"
                class="drop-dawn-list__nested-item"
              >
                {{ exportMargin.export1 }}
              </li>
              <li
                v-if="exportMargin.export2 != undefined"
                :class="{ activItem: index === currentId && examination }"
                class="drop-dawn-list__nested-item"
              >
                {{ exportMargin.export2 }}
              </li>
              <li
                v-else
                :class="{ activItem: index === currentId && examination }"
                class="drop-dawn-list__nested-item"
              >
                Нет экспортов
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "dropDownList",
    data() {
      return {
        exportMargins: [
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "Обычный экспорт", export: "li Обычный экспорт", export1: "li1 Обычный экспорт", export2: "li2 Обычный экспорт" },
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт prom", export: "li экспорт prom", export2: "li Обычный экспорт"},
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт rozetka", export: "li экспорт rozetka"},
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт rozetka"},
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт rozetka"},
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт rozetka"},
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт rozetka"},
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "экспорт rozetka"}, 
            {id:Math.round(Math.random() * (1 - 200) + 1), title: "Обычный экспорт", export: "li Обычный экспорт", export2: "li Обычный экспорт" },
        ],
        isActive: false,
        currentId: -1,
        examination: 0
      }
    },
    methods: {
        click(btnId){
            if (this.currentId === btnId) {
                console.log(btnId);
                this.currentId = Number.NEGATIVE_INFINITY;
                this.examination = this.btnId
                
            } else {
                this.currentId = btnId;
                console.log(btnId);
                this.examination = Number.NEGATIVE_INFINITY;
                this.isActive = true
                // console.log(this.examination);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
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
    font-size: 17px;
    text-transform: uppercase;
    color: $colorBlack;
    border: 1px solid $backgroundColorNav;
    border-top: 0;
    overflow: auto;
  }
  &__wrp-list-container {
    height: 387px;
    padding-left: 14px;
  }
  &__list {
    padding-left: 7px;
    border-left: 1px solid $mainColor;
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
    &::after {
      content: "";
      position: absolute;
      width: 7px;
      height: 1px;
      left: -7px;
      top: 31px;
      background-color: $backgroundColorNav;
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
    border-left: 1px solid #3f8483;
    transition: 0.3s ease-in;
    &::before {
      content: "";
      width: 1px;
      position: absolute;
      height: 20px;
      top: -20px;
      left: -1px;
      background-color: $mainColor;
    }
    &::after {
      content: "";
      width: 25px;
      position: absolute;
      height: 1px;
      top: 32px;
      left: -1px;
      background-color: $mainColor;
    }
  }
}

.activList {
  min-height: 100px;
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