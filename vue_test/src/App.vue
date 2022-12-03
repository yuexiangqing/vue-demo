<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <school></school>
    <hr/>
    <student></student>
  </div>
</template>

<script>
// 引入 school 组件
import Student from './components/Student'
import School from './components/School'
export default {
  name: 'App',
  data(){
    return {
      msg:'你好啊'
    }
  },
  components: { Student,School }
}
</script>

<style>
.app{
  background-color: gray;
}
</style>