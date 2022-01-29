<template>
  <div>
    <div class="nav-brand-markup">
      <div class="nav-brand-markup__wrp">
        <router-link
          :to="{ name: 'exportMargin' }"
          class="nav-brand-markup__btn"
        >
          <p>Наценка на экспорт</p>
        </router-link>
        <router-link :to="{ name: 'myBrand' }" class="nav-brand-markup__btn">
          <p>Наценка на бренд</p>
        </router-link>
        <router-link
          :to="{ name: 'markupPerCategory' }"
          class="nav-brand-markup__btn"
        >
          <p>Наценка на категорию</p>
        </router-link>
      </div>
    </div>
    <router-view> </router-view>
    <btn-save></btn-save>
  </div>
</template>

<script>
import btnSave from './UI/btnSave.vue'
export default {
  name: "myNavBrand",
  components: {
    btnSave
  },
  data(){
    return {
      isActiveExport: true,
      isActiveBrand: false,
      isActivecategory: false
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.nav-brand-markup {
  max-width: 1200px;
  width: 100%;
  padding-top: 15px;
  margin-bottom: 20px;
  padding-left: 63px;
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

.router-link-active {
  @include navBtnAct;
  transition: 0.3s ease-in;
}
</style>
