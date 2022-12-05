<template>
  <div class="student">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'StudentIndex',
    data(){
        return{
            name: '张三',
            sex: '男',
        }
    },
    mounted(){
        // console.log('Student', this.x)
        // 参数：第一个是消息名，第二个事要传入的数据
        pubsub.publish('hello',666)
      },
      methods:{
        sendStudentName(){
          //  this.$bus.$emit('hello',this.name)
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