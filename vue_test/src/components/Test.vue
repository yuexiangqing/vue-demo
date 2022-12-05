<template>
  <div>
    <button @click="isShow = !isShow">显示 / 隐藏</button>
    <!-- <h1 v-show="isShow" class="go">你好啊！</h1> -->

    <!-- 如果给 transition 了 name属性，那么下面样式上要以name属性开头 -->
    <transition name="hello" appear>
        <h1 v-show="isShow">你好啊！</h1>
    </transition>
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
}
.hello-enter-active{
    animation: atguigu 1s linear;
}
.hello-leave-active{
    animation: atguigu 1s linear reverse;
}

@keyframes atguigu {
    from{
        transform: translateX(-1000px)
    }
    to{
        transform: translateX(0px)
    }
}

</style>
