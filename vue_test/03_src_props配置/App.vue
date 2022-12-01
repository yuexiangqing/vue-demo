<template>
  <div>
    <student name="李四" sex="女" :age="18"></student>

  </div>
</template>

<script>
// 引入 school 组件
import Student from './components/Student'
export default {
  name: 'App',
  data(){
    return {
    
    }
  },
  methods:{
    
  },
  components: { Student }
}
</script>

<style>

</style>