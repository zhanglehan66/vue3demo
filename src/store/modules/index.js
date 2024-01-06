import { createPinia } from "pinia";

// 引入持久化插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 创建store实例
const store = createPinia();
// 使用持久化插件
store.use(piniaPluginPersistedstate);

export default store;
