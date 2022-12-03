<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的 props 实现：子给父传递数据 -->
    <school :getSchoolName="getSchoolName"></school>

    <!-- 通过父组件给子组件绑定一个自定义事件 实现：子给父传递数据 （第一中写法： 使用 @ 或者 v-on）-->
    <!-- <student v-on:atguigu="getStudentName"></student> -->
    <student @atguigu="getStudentName" @demo="m1"></student>

    <!-- 通过父组件给子组件绑定一个自定义事件 实现：子给父传递数据 （第一中写法： 使用 ref ）-->
    <!-- <student ref="student"></student> -->

  </div>
</template>

<script>
// 引入 school 组件
import Student from './components/Student'
import School from './components/School'
export default {
  name: 'App',
  components: { Student,School },
  data(){
    return {
      msg:'你好啊'
    }
  },
  methods:{
    getSchoolName(name){
      console.log('App收到了学校名:',name);
    },
    getStudentName(name,...params){
      // console.log('App收到了学生名:',name)
      console.log('App收到了学生名:',name,params)
    },
    m1(){
      console.log('demo事件被触发了')
    }
  },
  mounted(){
    // $on 当什么（atguigu）被触发的时候，执行 getStudentName 回调
    // this.$refs.student.$on('atguigu',this.getStudentName)
    
    // 如果只能触发一次，那么把 $on 换成 $once
    // this.$refs.student.$once('atguigu',this.getStudentName)

    // 可以使用定时器
    // setTimeout(()=>{
    //   this.$refs.student.$on('atguigu',this.getStudentName)
    // },3000)
  }
  
}
</script>

<style>
.app{
  background-color: gray;
  padding: 5px;
}
</style>