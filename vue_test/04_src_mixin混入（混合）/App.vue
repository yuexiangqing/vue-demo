<template>
  <div>
    
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
    
    }
  },
  methods:{
    
  },
  components: { Student,School }
}
</script>

<style>

</style>