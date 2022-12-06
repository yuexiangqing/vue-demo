<template>

<!-- 当插槽的定义在 category中，数据也在其中，但是用数据声明的结构是由插槽的使用者 App.vue来决定的 -->
<!-- 在子组件中需要通过 slot 定义一个属性名，拿到数据 :games="games"  -->
<!-- 在父组件中，通过 template 来写，并写上 scope 作用域 ，并给其命名，子组件传过来的数据都在scope命名的属性中 -->


 <div class="container">
   <category title="游戏">
	<template scope="atguigu">
	<ul>
       <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
    </ul>
	</template>
   </category>

   <category title="游戏">
	<template scope={games}>
	<ol>
       <li v-for="(g,index) in games" :key="index" style="color:red">{{g}}</li>
    </ol>
	</template>
   </category>

   <category title="游戏">
	<template slot-scope={games}>
       <h4 v-for="(g,index) in games" :key="index" style="color:red">{{g}}</h4>
	</template>
   </category>
	
</div>
</template>

<script>
import Category from './components/Category'
export default {
	name:'App',
	components: {Category},
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
