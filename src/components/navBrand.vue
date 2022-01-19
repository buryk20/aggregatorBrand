<template>
  <div class="nav-wrp">
    <button class="nav-btn activNavBtn">Наценка на экспорт</button>
  </div>
</template>

<script>
export default {
    name:'myNavBrand'
}
</script>

<style lang="scss" scoped>
.nav-wrp {
  height: 35px;
  padding-left: 2px;
  padding-right: 2px;
  background-color: $backgroundColorNav;
  border-radius: $borderRadius;
  display: flex;
  align-items: center;
}
.nav-btn {
  @include navBtn;
}
.activNavBtn {
  @include navBtnAct;
}
</style>