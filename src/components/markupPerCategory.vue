<template>
  <div class="markup-category">
    <button @click="showDial" class="markup-category__btn">Выбор категории</button>
    <dialog-export v-model:showDialog="dialogVisible">
      vtgrtgrtgtrgrg
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

<style lang="scss" scoped>
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
}
</style>