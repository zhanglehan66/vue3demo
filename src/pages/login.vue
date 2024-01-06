<template>
  <div class="app">
    Login
    <button
      :class="cname"
      @mousedown="change()"
      @mouseup="change()"
      @click="goto()"
    >
      去首页
    </button>
    <p>name: {{ store.name }}</p>
    <p>age: {{ store.age }}</p>
    <p>sex: {{ store.sex }}</p>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import router from "../router";
import { useUsersStore } from "../store/modules/user";

const state = reactive({
  down: false,
});

const store = useUsersStore();
console.log(store);

const cname = computed(() => {
  return state.down == true ? "special" : "normal";
});

const goto = () => {
  router.push({ path: "/index" });
};
const change = () => {
  state.down = !state.down;
};
</script>

<style lang="less" scoped>
.app {
  width: 300px;
  height: 300px;
  background-color: rgb(243, 243, 255);
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
