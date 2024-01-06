import { defineStore } from "pinia";

// 创建store：
//   调用pinia中的defineStore函数，该函数接收两个参数：
//      name: 字符串，必传，该store的唯一id
//      options: 对象，store的配置项，比如配置store内的数据，修改数据的方法等

// 可以定义任意数量的store，因为一个store就是调用一次函数嘛
export const useUsersStore = defineStore("users", {
  // 其它配置
  state: () => {
    return {
      name: "李华",
      age: 25,
      sex: "男",
    };
  },

  //   getter类似于computed计算属性，用来做一些数据的操作返回新的结果，跟computed一样会被缓存
  getters: {
    getAddAge: (state) => {
      return state.age + 100;
    },

    // 可携带参数
    getAddParamsAge: (state) => {
      return (params) => state.age + 100 + params;
    },

    // 调用其他getter用this关键字就可以
    getNameAndAge() {
      return this.name + this.getAddAge;
    },
  },

  //   业务代码写在actions里
  actions: {
    saveName(name) {
      // 修改state中的name
      this.name = name;
    },
  },
});
