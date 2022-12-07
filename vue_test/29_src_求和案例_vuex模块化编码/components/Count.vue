<template>
  <div>
	<!-- <h1>当前求和为：{{countAbout.sum}} </h1> -->
    <!-- <h3>当前求和放大10倍为:{{bigSum}} </h3> -->
    <!-- <h3>我在{{countAbout.school}} 学习{{countAbout.subject}}</h3> -->
    <!-- <h3 style="color:red">person的总人数是:{{personAbout.personList.length}}</h3>   -->

	<h1>当前求和为：{{sum}} </h1>
    <h3>当前求和放大10倍为:{{bigSum}} </h3>
    <h3>我在{{school}} 学习{{subject}}</h3>
	<h3 style="color:red">person的总人数是:{{personList.length}}</h3>


	<select v-model.number="n">
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
	</select>
	<button @click="increment(n)">+</button>
	<button @click="decrement(n)">-</button>
	<button @click="incrementOdd(n)">当前求和为奇数再加</button>
	<button @click="incrementWait(n)">等一等再加</button>
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

	...mapState('countAbout',['sum','school','subject']),
	...mapState('personAbout',['personList']),
	...mapGetters('countAbout',['bigSum'])
	// ...mapState(['countAbout','[personAbout]']), //在模版上渲染的时候，需要通过 countAbout.属性名来渲染

	// ----------------------------------------------------------------

	// 借助 mapGetters 生成计算属性，从 Getters 中读取数据（对象写法）
	// ...mapGetters({bigSum:'bigSum'})
	// 借助 mapGetters 生成计算属性，从 Getters 中读取数据（数组写法）
	
  },
  methods:{
	
	// 借助 mapMutations 生成对应的方法，方法中会调用 commit 方法去联系 mutations (对象写法)
	...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}), 	// 需要在模版上添加参数

	// 借助 mapMutations 生成对应的方法，方法中会调用 commit 方法去联系 mutations (数组写法)
	// ...mapMutations(['JIA','JIAN']), 	// 需要在模版上调整数据，变为 JIA JIAN

	// ==================================================================

	// 借助 mapActions 生成对应的方法，方法中会调用 despatch 方法去联系 actions (对象写法)
	...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
	// 借助 mapActions 生成对应的方法，方法中会调用 despatch 方法去联系 actions (数组写法)
	// ...mapActions(['jiaOdd','jiaWait'])
	
  },
  mounted(){
		// const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
		// console.log(x)
		console.log(this.$store)
	}
  
}
</script>

<style scoped>
button{
	margin-left: 5px;
}
</style>
