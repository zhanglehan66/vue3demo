<template>
  <div class="app">
    <head-component></head-component>
    <div class="main">
      Index
      <button
        :class="cname"
        @mousedown="change()"
        @mouseup="change()"
        @click="goto()"
      >
        去登录
      </button>
    </div>
    <div class="main">
      <p>name:{{ store.name }}</p>
      <p>age:{{ store.age }}</p>
      <p>sex:{{ store.sex }}</p>
      <p>getters:{{ store.getNameAndAge }}</p>
      <p>getters+Params:{{ store.getAddParamsAge(500) }}</p>
      <Child></Child>
      <button @click="store.name = '麦克'">修改name</button>
      <button @click="reset">重置</button>
      <button @click="patchStore2">批量修改数据</button>
      <button @click="store.saveName('李成功')">action</button>
      <button @click="myAction()">action++</button>
    </div>
  </div>
</template>

<script setup>
import Child from "./components/Child.vue";
import { reactive, computed } from "vue";
import router from "../router";
import headComponent from "./components/head.vue";
import { useUsersStore } from "../store/modules/user";
const store = useUsersStore();

console.log(store.secret);
const state = reactive({
  down: false,
});

const cname = computed(() => {
  return state.down == true ? "special" : "normal";
});

const goto = () => {
  router.push({ path: "/login" });
};
const change = () => {
  state.down = !state.down;
};

// store数据重置
const reset = () => {
  store.$reset();
};

// 批量修改数据方法一
const patchStore = () => {
  store.$patch({
    name: "王五",
    age: 100,
  });
};

// 批量修改数据方法二（推荐）
const patchStore2 = () => {
  store.$patch((state) => {
    state.name = "王五";
    state.age = 99;
  });
};

const myAction = () => {
  store.saveName("李成功");
};
</script>

<style lang="less" scoped>
body {
  margin: 0;
  padding: 0;
}
.main {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 100px;
    height: 40px;
    margin-top: 10px;
    border: none;
  }
  .normal {
    background-color: #fff;
  }

  .special {
    background-color: #a8a8a8;
    color: #fff;
  }
}
</style>
