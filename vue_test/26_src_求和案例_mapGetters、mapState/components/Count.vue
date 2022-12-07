<template>
  <div>
    <!-- <h1>当前求和为：{{he}} </h1>
    <h3>当前求和放大10倍为:{{bigSum}} </h3>
    <h3>我在{{xuexiao}} 学习{{xueke}}</h3> -->

	<h1>当前求和为：{{sum}} </h1>
    <h3>当前求和放大10倍为:{{bigSum}} </h3>
    <h3>我在{{school}} 学习{{subject}}</h3>

	<select v-model.number="n">
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
	</select>
	<button @click="increment">+</button>
	<button @click="decrement">-</button>
	<button @click="incrementOdd">当前求和为奇数再加</button>
	<button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
// 引用 mapState、 mapGetters
import {mapState,mapGetters} from 'vuex'
export default {
  name: 'CountIndex',
  data(){
	return{
		n: 1,		// 用户选择的数字
	}
  },
  computed:{
	// 上面的插值语法用的时候就可以简单点了
	// 靠程序员自己亲自去写计算属性
	// he(){
	// 	return this.$store.state.sum
	// },
	// xuexiao(){
	// 	return this.$store.state.school
	// },
	// xueke(){
	// 	return this.$store.state.subject
	// },

	// 映射状态，借助 mapState 生成计算属性，从 state 中读取数据 ~~~~~~~（对象写法）
	// ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

	// sum(){
	// 	return this.$store.state.sum
	// },
	// school(){
	// 	return this.$store.state.school
	// },
	// subject(){
	// 	return this.$store.state.subject
	// },

	// 映射状态，借助 mapState 生成计算属性，从 state 中读取数据 ~~~~~~~（数组写法）
	// ...mapState({sum:'sum',school:'school',subject:'subject'}),
	...mapState(['sum','school','subject']),

	// ----------------------------------------------------------------

	// bigSum(){
	// 	return this.$store.getters.bigSum
	// }

	// 借助 mapGetters 生成计算属性，从 Getters 中读取数据（对象写法）
	// ...mapGetters({bigSum:'bigSum'})
	// 借助 mapGetters 生成计算属性，从 Getters 中读取数据（数组写法）
	
	...mapGetters(['bigSum'])
  },
  methods:{
	increment(){
		// this.$store.dispatch('jia',this.n)
		this.$store.commit('JIA',this.n)
	},
	decrement(){
		// this.$store.dispatch('jian',this.n)
		this.$store.commit('JIAN',this.n)
	},


	// incrementOdd(){
	// 	if(this.$store.state.sum % 2){
	// 		this.$store.dispatch('jiaOdd',this.n)
	// 	}
	// 将代码写在index.js中
	incrementOdd(){
		this.$store.dispatch('jiaOdd',this.n)
	},


	// incrementWait(){
	// 	setTimeout(() => {
	// 	this.$store.dispatch('jiaWait',this.n)
	// 	}, 500)
	// }
	incrementWait(){
		this.$store.dispatch('jiaWait',this.n)
	}
  },
  mounted(){
		const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
		console.log(x)
	}
  
}
</script>

<style scoped>
button{
	margin-left: 5px;
}
</style>
