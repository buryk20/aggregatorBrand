<template>
<div>
  <div class="nav-brand-markup">
    <div  class="nav-brand-markup__wrp">
      <button
        v-for="(navMargin, index) of navMargins"
        :key="navMargin.id"
        @click="click(index)"
        :class="{ activNavBtn: index === currentId }"
        class="nav-brand-markup__btn"
      >
        {{ navMargin.title }}
      </button>
    </div>
  </div>
  <router-link :to="{ name: 'test'}">
                    <p>Слайдер</p>
       </router-link>
</div>
</template>

<script>
export default {
  name: "myNavBrand",
  data(){
    return {
      navMargins: [
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "Наценка на экспорт"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "Наценка на бренд"},
        {id:Math.round(Math.random() * (1 - 200) + 1), title: "Наценка на категорию"}
      ],
      currentId: 0,
      isActive: false,
    }
  },
  methods: {
    click(btnId) {
      console.log(btnId);
      if (this.currentId === btnId) {
        this.currentId = Number.NEGATIVE_INFINITY;
        this.replayCheck = btnId;
      } else {
        this.currentId = btnId;
        this.replayCheck = Number.NEGATIVE_INFINITY;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.nav-brand-markup {
  max-width: 1200px;
  width: 100%;
  @include marginCentre;
  &__wrp {
    height: 35px;
    padding-left: 2px;
    padding-right: 2px;
    background-color: $backgroundColorNav;
    border-radius: $borderRadius;
    display: inline-flex;
    align-items: center;
  }
  &__btn {
    @include navBtn;
    transition: 0.3s ease-out;
  }
  &__btn + &__btn {
    margin-left: 15px;
  }
}

.activNavBtn {
  @include navBtnAct;
  transition: 0.3s ease-in;
}
</style>
