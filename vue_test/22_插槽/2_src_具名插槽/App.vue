<template>
 <div class="container">
   <category title="美食">
	<img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
	<a slot="footer" href="http://www.atguigu.com">更多美食</a>
	</category>
   <category title="游戏">
	<ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
    </ul>
	<div class="foot" slot="footer">
		<a href="http://www.atguigu.com">单机游戏</a>
		<a href="http://www.atguigu.com">网络游戏</a>
	</div>
	</category>
   <category title="电影">
	<video slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>

	<!-- <template slot="footer"> 当用 template的时候，可以用下面的简写-->
	<template v-slot:footer>
		<div class="foot">
			<a href="http://www.atguigu.com">经典</a>
			<a href="http://www.atguigu.com">热门</a>
			<a href="http://www.atguigu.com">推荐</a>
		</div>
		<h4 slot="footer">欢迎前来观影</h4>
	</template>

	</category>
</div>
</template>

<script>
import Category from './components/Category'
export default {
	name:'App',
	components: {Category},
	data(){
		return{
			foods:['火锅','烧烤','小龙虾','牛排'],
			games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
			films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
		}
	}
	}
</script>

<style>
.container,.foot{
	display: flex;
	justify-content: space-around;
}
h3{
	text-align: center;
	background-color: orange;
}
h4{
	text-align: center;
}

</style>
