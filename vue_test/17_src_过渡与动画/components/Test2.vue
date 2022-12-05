<template>
  <div>
    <button @click="isShow = !isShow">显示 / 隐藏</button>
    <!-- <h1 v-show="isShow" class="go">你好啊！</h1> -->

    <!-- 如果给 transition 了 name属性，那么下面样式上要以name属性开头 -->
    <transition-group name="hello" appear>
        <h1 key="1" v-show="isShow">你好啊！</h1>
        <h1 key="2" v-show="isShow">尚硅谷！</h1>
    </transition-group>
  </div>
</template>

<script>
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
    /* 过渡的效果，也可以写在下面 */
    /* transition: 0.5s linear; */
}
/* 进入的起点 离开的终点 */
.hello-enter,.hello-leave-to{
  transform: translateX(-100%);
}
/* 进入的终点 离开的起点 */
.hello-enter-to,.hello-leave{
  transform: translateX(0);
}
.hello-enter-active,.hello-leave-active{
  transition: 0.5s linear;
}

</style>
