<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">

        <!-- 跳转路由并携带 params 参数，to的字符串写法 -->

        <!-- 如果需要这样配置，那么还需要在 index.js总配置路由详情 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

        <!-- 跳转路由并携带 params 参数，to的对象写法 -->
        <router-link :to="{
          // path:'/home/message/detail',
          // 需要注意的是，当使用 params时，路径只能用 name，不能用 path ,否则报错
          name:'xiangqing',
          query:{
            id: m.id,
            title: m.title
          }
        }">
          {{m.title}}
        </router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: 'MessageIndex',
data(){
  return {
    messageList:[
      {id:'001',title:'消息001'},
      {id:'002',title:'消息002'},
      {id:'003',title:'消息003'}
    ]
  }
}
}
</script>

<style>

</style>