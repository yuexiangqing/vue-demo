<template>
   <h2>我是About的内容</h2>
</template>

<script>
export default {
name: 'AboutIndex',
// 通过了路由规则，进入该组件时被调用
beforeRouteEnter(to,from,next){
   // console.log('beforeRouteEnter',to,from)
      if(to.meta.isAuth){  //判断是否需要鉴权
       if(localStorage.getItem('school') === 'atguigu'){
           next()
       } else {
           alert('学校名不符合，无权限查看')
       }
      } else{
           next()
      }
},
// 通过了路由规则，离开该组件时被调用
beforeRouteLeave(to,from,next){
   console.log('beforeRouteEnter',to,from)
   next()
}
}
</script>

<style>

</style>