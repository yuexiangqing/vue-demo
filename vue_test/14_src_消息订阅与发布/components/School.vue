<template>
    <div class="school">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
    </div>
  </template>
  
  <script>
  import pubsub from 'pubsub-js'
  export default {
      name: 'SchoolIndex',
      props:['getSchoolName'],
      data(){
          return{
              name: '尚硅谷',
              address: '北京'
          }
      },
      mounted(){
        // console.log('School', this.$on)
        // this.$bus.$on('hello',(data)=>{
        //   console.log('我是school组件,收到了数据',data);
        // })

        // 参数:第一个是消息名，第二个是数据
        this.pubId = pubsub.subscribe('hello',function(msgName, data){
          // console.log(this)  如果想要这里面的 this 指向该组件，需要写成箭头函数
          console.log('有人发布了 hello 消息,hello消息的回调执行了',msgName, data)
        })
      },
      // 要记得解绑全局总线
      beforeDestroy(){
        // this.$bus.$off('hello')
        pubsub.unsubscribe(this.pubId)
      }
    }
  </script>
  
  <style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
  </style>