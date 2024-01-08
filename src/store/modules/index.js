import { createPinia } from "pinia";
// 引入持久化插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// 创建pinia实例
const pinia = createPinia();

// 自定义插件：
//   创建的每个store中都会添加一个名为‘secret’的属性
//   对添加全局对象很有用，比如路由器、modal、toast管理器等
function SecretPiniaPlugin() {
  return { secret: "this is a joke" };
}

// pinia插件是一个函数，可以选择性返回store属性。它接受一个可选参数context
function myPiniaPlugin(context) {
  //   context.pinia; // 用 `createPinia()` 创建的 pinia。
  //   context.app; // 用 `createApp()` 创建的当前应用(仅 Vue 3)。
  //   context.store; // 该插件想扩展的 store
  //   context.options; // 定义传给 `defineStore()` 的 store 的可选对象。
  // ...
  console.log(context.store);
  if (context.store.name == "李华") {
    // 为了使 devtools 能追踪到money属性，需要确保在 dev 模式下将其添加到 store._customProperties 中：
    if (process.env.NODE_ENV === "development") {
      // 添加你在 store 中设置的键值
      context.store._customProperties.add("money");
    }
    return (context.store.money = 200);
  }
}

// 使用持久化插件
pinia.use(piniaPluginPersistedstate);
// 使用自定义插件SecretPiniaPlugin
pinia.use(SecretPiniaPlugin);
pinia.use(myPiniaPlugin);

export default pinia;
