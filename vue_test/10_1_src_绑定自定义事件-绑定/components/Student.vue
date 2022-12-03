<template>
  <div class="student">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <button @click="sendStudentName">把学生名给App</button>
  </div>
</template>

<script>
export default {
    name: 'StudentIndex',
    data(){
        return{
            name: '张三',
            sex: '男'
        }
    },
    methods:{
      sendStudentName(){
        // 触发 Student 组件实例身上的 atguigu 事件
        // this.$emit('atguigu',this.name)

        // 如果要传入很多数据
        this.$emit('atguigu',this.name,666,888,999)
      }
    }
}
</script>

<style>
.student {
  background-color: pink;
  margin-top: 30px;
}
</style>