<template>
    <div class="school">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
    </div>
  </template>
  
  <script>
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
      },
      // 要记得解绑全局总线
      beforeDestroy(){
        // this.$bus.$off('hello')
      }
    }
  </script>
  
  <style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
  </style>