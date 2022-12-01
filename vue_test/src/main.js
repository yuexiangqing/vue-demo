// 该文件是整个项目的入口文件
// 引入 vue
import Vue from 'vue'
// 引入 App 组件， 它是所有组件的父组件
import App from './App.vue'
// 关闭 vue 的生产提示
Vue.config.productionTip = false

// 创建 vue 的实例对象 -- vm
new Vue({
  // 完成了： 将App组件放入容器中
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   // 完成了： 将App组件放入容器中
//   // render: h => h(App),
//   template:`<App></App>`,
//   components: {App}
// })