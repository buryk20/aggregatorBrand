<template>
  <div class="markup-category">
    <button @click="showDial" class="markup-category__btn">Выбор категории</button>
    <dialog-export v-model:showDialog="dialogVisible">
      <div class="markup-category__dialog-categories-wrp">
        <div class="markup-category__dialog-categories-head">
          <h2 class="markup-category__dialog-categories-head-text">Выбор категории</h2>
          <div class="markup-category__dialog-categories-btn-subcate">
            <p>
              Отобразить вложенность
            </p>
            <button class="markup-category__dialog-categories-btn-wrp">
              <div class="markup-category__dialog-categories-btn">
                <span class="markup-category__dialog-categories-btn-line-r"></span>
                <span class="markup-category__dialog-categories-btn-line-l"></span>
              </div>
            </button>
          </div>
          <btn-close-dialog></btn-close-dialog>
        </div>
      </div>
    </dialog-export>
  </div>
</template>

<script>
export default {
    name: 'markupPerCategory',
    data() {
      return {
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

<style lang="scss">
.markup-category {
  height: 660px;
  @include contentGrid;
  @include marginCentre;
  &__btn {
    width: 389px;
    height: 48px;
    @include flexCentrJust;
    background-color: $mainColor;
    color: $colorWhite;
    text-transform: uppercase;
    border-radius: $borderRadius;
  }
  &__dialog-categories-wrp {
    width: 679px;
    font-size: 17px;
    text-transform: uppercase;
    border: 1px solid $mainColor;
    border-top-left-radius: $borderRadius;
    border-top-right-radius: $borderRadius;
  }
  &__dialog-categories-btn-wrp {
    width: 46px;
    height: 24px;
    margin-left: 10px;
    background-color: #DDDDDD;
    border-radius: 12px;
    position: relative;
  }
  &__dialog-categories-btn {
    background-color: $colorWhite;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 50%;
  }
  &__dialog-categories-btn-line-r, &__dialog-categories-btn-line-l {
    height: 2px;
    width: 15px;
    background-color: #DDDDDD;
    position: absolute;
    top: 10px;
    left: 3px;
  }
  &__dialog-categories-btn-line-r {
    transform: rotate(45deg);
  }
  &__dialog-categories-btn-line-l {
    transform: rotate(-45deg);
  }
  &__dialog-categories-head {
    padding: 0 16px;
    @include flexCentrJust;
    justify-content: space-between;
  }
  &__dialog-categories-btn-subcate {
    @include flexCent;
    text-transform: initial;

  }
  &__dialog-categories-head-text {
    color: $mainColor;
    font-weight: 400;
  }
}
</style>