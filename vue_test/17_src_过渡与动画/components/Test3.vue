<template>
  <div>
    <button @click="isShow = !isShow">显示 / 隐藏</button>

    <!-- 先引入 name 属性，然后再选进入和退场的样式 -->
    <transition-group 
    name="animate__animated animate__bounce" 
    enter-active-class="animate__swing"
    leave-active-class="animate__bounceOutUp"
    appear>
        <h1 key="1" v-show="isShow">你好啊！</h1>
        <h1 key="2" v-show="isShow">尚硅谷！</h1>
    </transition-group>
  </div>
</template>

<script>
// 先安装
// 后引入库
import 'animate.css'
export default {
  name: 'TestIndex',
  data(){
    return {
        isShow: true
    }
  }
}
</script>

<style scoped>
h1{
    background-color: orange;
   
}

</style>
