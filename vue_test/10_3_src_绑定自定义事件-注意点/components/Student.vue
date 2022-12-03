<template>
  <div class="student">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>当前求和为：{{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑 atguigu 事件</button>
    <button @click="death">销毁当前Student组件的实例</button>
  </div>
</template>

<script>
export default {
    name: 'StudentIndex',
    data(){
        return{
            name: '张三',
            sex: '男',
            number: 0
        }
    },
    methods:{
      add(){
        console.log('add回调被调用了')
        this.number++
      },
      sendStudentName(){
        // 触发 Student 组件实例身上的 atguigu 事件
        // this.$emit('atguigu',this.name)

        // 如果要传入很多数据
        this.$emit('atguigu',this.name,666,888,999)
        // this.$emit('demo')
      },
      unbind(){
        this.$off('atguigu')   // 只适用于解绑一个自定义事件
        // this.$off(['atguigu','demo'])  // 解绑多个，需要写成数组
        // this.$off()  //解绑所有的自定义事件
      },
      death(){
        this.$destroy()  //销毁了当前 student 组件的实例,销毁后所有 Student 实例的自定义事件全都不生效了
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