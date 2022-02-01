<template>
  <button
    class="drop-dawn-list__nested-item-btn"
    :class="{ btnDelete: isActive }"
    @click="bntDel"
  >
    {{ textBtnDel }}
  </button>
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
          this.textBtnDel = 'Убрать'
          this.$emit('textBtn', this.textBtnDel, this.isActiveHover)
        }
        
        
    }
 }
}
</script>

<style>
</style>