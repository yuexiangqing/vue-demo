<template>
  <div>
	<h1>当前求和为：{{sum}} </h1>
    <h3>当前求和放大10倍为:{{bigSum}} </h3>
    <h3>我在{{school}} 学习{{subject}}</h3>

	<select v-model.number="n">
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
	</select>
	<button @click="increment(n)">+</button>
	<button @click="decrement(n)">-</button>
	<!-- <button @click="JIA(n)">+</button> -->
	<!-- <button @click="JIAN(n)">-</button> -->
	<button @click="incrementOdd(n)">当前求和为奇数再加</button>
	<button @click="incrementWait(n)">等一等再加</button>
	<!-- <button @click="jiaOdd(n)">当前求和为奇数再加</button>
	<button @click="jiaWait(n)">等一等再加</button> -->
  </div>
</template>

<script>
// 引用 mapState、 mapGetters
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: 'CountIndex',
  data(){
	return{
		n: 1,		// 用户选择的数字
	}
  },
  computed:{
	
	// 映射状态，借助 mapState 生成计算属性，从 state 中读取数据 ~~~~~~~（对象写法）
	// ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

	// 映射状态，借助 mapState 生成计算属性，从 state 中读取数据 ~~~~~~~（数组写法）
	// ...mapState({sum:'sum',school:'school',subject:'subject'}),
	...mapState(['sum','school','subject']),

	// ----------------------------------------------------------------

	// 借助 mapGetters 生成计算属性，从 Getters 中读取数据（对象写法）
	// ...mapGetters({bigSum:'bigSum'})
	// 借助 mapGetters 生成计算属性，从 Getters 中读取数据（数组写法）
	
	...mapGetters(['bigSum'])
  },
  methods:{
	// 程序员亲自写方法
	// increment(){
	// 	this.$store.commit('JIA',this.n)
	// },
	// decrement(){
	// 	this.$store.commit('JIAN',this.n)
	// },
	// 借助 mapMutations 生成对应的方法，方法中会调用 commit 方法去联系 mutations (对象写法)
	...mapMutations({increment:'JIA',decrement:'JIAN'}), 	// 需要在模版上添加参数

	// 借助 mapMutations 生成对应的方法，方法中会调用 commit 方法去联系 mutations (数组写法)
	// ...mapMutations(['JIA','JIAN']), 	// 需要在模版上调整数据，变为 JIA JIAN

	// ==================================================================

	// incrementOdd(){
	// 	this.$store.dispatch('jiaOdd',this.n)
	// },

	// incrementWait(){
	// 	this.$store.dispatch('jiaWait',this.n)
	// }

	// 借助 mapActions 生成对应的方法，方法中会调用 despatch 方法去联系 actions (对象写法)
	...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
	// 借助 mapActions 生成对应的方法，方法中会调用 despatch 方法去联系 actions (数组写法)
	// ...mapActions(['jiaOdd','jiaWait'])
	
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
