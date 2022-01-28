<template>
  <li class="drop-dawn-list__wrp-li">
    <div class="drop-dawn-list__wrp-li-btn-wrp">
      <button class="drop-dawn-list__list-btn" @click="click">
        <span
          :class="{ activBtn: active }"
          class="drop-dawn-list__list-btn-line-virtical"
        ></span>
        <span class="drop-dawn-list__list-btn-line-horizon"></span>
      </button>
      <p>
        {{ value.title }}
      </p>
    </div>
    <ul class="drop-dawn-list__none" :class="{ activList: active }">
      <li
        class="drop-dawn-list__nested-item"
        :class="{ activItem: active }"
        v-for="(item, index) of value.children"
        v-if="isHasChildren"
        :key="index"
      >
        <span class="drop-dawn-list__pseudo-element"></span>
        {{ item }}
        <btn-add @click="addExport(item)">Добавить</btn-add>
      </li>
      <li
        v-else
        :class="{ activItem: active }"
        class="drop-dawn-list__nested-item"
      >
        <span class="drop-dawn-list__pseudo-element"></span>
        Нет экспортов
      </li>
      <!-- <tree-item v-for="item of exportMargins" :key="item.id" :value="item">
      </tree-item> -->
    </ul>
  </li>
  <div class="ubtn-plus">Тест дисейбла</div>
</template>

<script>
class TreeItemData {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.children = data.children;
  }
}

export default {
  name: "treeItem",
  props: {
    value: {
      required: true,
      type: TreeItemData,
      default: {},
    },
  },
  data() {
    return {
      active: false,
      newExport: [],
    };
  },
  computed: {
    isHasChildren() {
      return this.value?.children?.length;
    },
  },
  methods: {
    click() {
      this.active = !this.active;
    },
    addExport(item) {
      console.log(item);

      this.newExport.push({
        parent: this.title,
        child: item,
      });
    },
  },
};
</script>

<style lang="scss">
@mixin hasParent($selector) {
  $that: &;

  @at-root {
    #{$selector}>#{$that} {
      @content;
    }
  }
}
.ubtn-plus {
  padding: 16px;
  background-color: aqua;

  @include hasParent(".dis") {
    background-color: gray;
  }
}
</style>
