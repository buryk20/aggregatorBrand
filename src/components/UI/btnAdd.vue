<template>
  <div :class="{ btnAddWrp: isActive }" class="btn-add-wrp">
    <button
      class="drop-dawn-list__nested-item-btn"
      :class="{ btnDelete: isActive }"
      @click="bntDel"
    >
      <span></span>
      {{ textBtnDel }}
    </button>
  </div>
</template>

<script>
export default {
 name: 'btnAdd',
 data(){
   return {
     isActive: false,
     isActiveHover: false,
     textBtnDel: 'Добавить'
   }
 },
 methods: {
    bntDel() {
        if(this.isActive === true) {
          this.isActive = false;
          this.textBtnDel = 'Добавить'
          this.$emit('textBtn', this.textBtnDel)
        } else {
          this.isActive = true;
          this.isActiveHover = true;
          this.textBtnDel = 'Удалить'
          this.$emit('textBtn', this.textBtnDel, this.isActiveHover)
        }
        
        
    }
 }
}
</script>

<style lang="scss">
.btn-add-wrp {
  width: 100%;
  height: 64px;
  position: absolute;
  left: 0;
  top: 0;
  @include flexCent;
  z-index: 1;
}
.drop-dawn-list {
  &__nested-item-btn {
    padding: 11px;
    position: absolute;
    right: 21px;
    color: $colorWhite;
    display: none;
    background-color: $colorBtn;
    text-transform: uppercase;
    border-radius: $borderRadius;
    z-index: 20;
    @include btnDelete(".btnDelete") {
      background-color: #aa3c3c;
    }
  }
}
.btnAddWrp {
  background-color: $backgroundColorHov;
  z-index: -1;
}
.btnDelete {
  background-color: #aa3c3c;
  display: block;
}
</style>