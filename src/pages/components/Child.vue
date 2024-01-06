<template>
  <p>---child---</p>
  <p>name:{{ name }}</p>
  <p>age:{{ age }}</p>
  <p>sex:{{ sex }}</p>
  <p>getters+Params:{{ getAddParamsAge(1000) }}</p>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUsersStore } from "../../store/modules/user";
const store = useUsersStore();

// 采用解构的方式调用store中的数据，这种方式没法达到响应式的目的，比如父组件的数据改变了子组件还是原来的值，storeToRefs就是pinia提供的解决响应式的方法
const { name, age, sex, getAddParamsAge } = storeToRefs(store);
</script>

<style></style>
