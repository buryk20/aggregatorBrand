<template>
  <div
    :class="{ isDisable: checkbox }"
    v-for="btnPlus in btnsPlus"
    @submit.prevent
    class="markup-all-price"
    :key="btnPlus.id"
  >
    <div @click="del(btnPlus)"><btn-delete> </btn-delete></div>
    <div class="margin">
      <input
        class="margin__price"
        type="number"
        name="margin"
        placeholder="1000"
        :disabled="checkbox"
      />
      <div>
        <select
          :disabled="checkbox"
          class="margin__list-wrp"
          v-model="selected"
        >
          <option
            v-for="item in items"
            v-bind:key="item.id"
            v-bind:value="item.value"
          >
            {{ item.title }}
          </option>
          <span class="margin__currency"> {{ selected }} </span>
        </select>
      </div>
    </div>
    <div
      @click="addField"
      :disabled="checkbox"
      :class="{ btnPlusNone: isActiveBtnPlus }"
      class="btn-plus"
    >
      <span class="btn-plus__dash-left"></span>
      <span class="btn-plus__dash-right"></span>
    </div>
  </div>
  <div></div>
</template>

<script>
export default {
  name: "my-btn-plus",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "%",
          value: 1,
        },
        {
          id: 2,
          title: "Грн",
          value: 2,
        },
        { id: 3, title: "-%", value: 3 },
        { id: 4, title: "-Грн", value: 4 },
      ],
      selected: "2",
      btnsPlus: [{ id: 1 }],
      isActiveBtnPlus: false
    };
  },
  props: {
    checkbox: {
      type: Boolean
    } 
  },
  methods: {
    addField() {
      if(!this.checkbox) {
        const newFiled = {
          id: Math.round(Math.random() * (1 - 200) + 1),
        };
        if (this.btnsPlus.length <= 2) {
          this.btnsPlus.push(newFiled);
        } if (this.btnsPlus.length === 3) {
          this.isActiveBtnPlus = true
        }
      }  
    },
    del(btnPlus){
      if(!this.checkbox) {
        console.log(this.btnsPlus.length);
        if(this.btnsPlus.length > 1) {
          this.btnsPlus = this.btnsPlus.filter(p => p.id !== btnPlus.id)
        }
        if (this.btnsPlus.length < 3) {
          this.isActiveBtnPlus = false
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin hasParent($selector) {
  $that: &;

  @at-root {
    #{$selector} > #{$that} {
      @content;
    }
  }
}
.ubtn-plus {
  padding: 16px;
  background-color: aqua;

  // @include hasParent(".dis") {
  //   background-color: gray;
  // }
}

.markup-all-price {
  margin-bottom: 5px;
  @include flexCent;
  position: relative;
  opacity: 1;
}
.btn-plus {
  @include btnPlus;
  position: absolute;
  right: -24px;
  &__dash-left {
    @include dashHorizon;
    background-color: $colorWhite;
  }
  &__dash-right {
    @include dashVertical;
    background-color: $colorWhite;
  }
  &:hover &__dash-left {
    transform: rotate(90deg);
    transition: 0.2s ease-in;
  }
  &:hover &__dash-right {
    transform: rotate(180deg);
    transition: 0.2s ease-in;
  }
}

.margin {
  margin-right: 5px;
  display: flex;
  &__price {
    width: 61px;
    height: 34px;
    padding-left: 11px;
    margin-right: 5px;
    border: $borderBlock;
    @include flexCentrJust;
    border-radius: $borderRadius;
  }
  &__list-wrp {
    height: 34px;
    border: $borderBlock;
    border-radius: $borderRadius;
    color: $colorBlack;
    text-transform: uppercase;
  }
  &__currency {
    color: $colorBlack;
    text-transform: uppercase;
  }
}
option {
  border-radius: 8px;
}

.isDisable {
  opacity: 0.5;
}

.btnPlusNone {
  display: none;
}
</style>
