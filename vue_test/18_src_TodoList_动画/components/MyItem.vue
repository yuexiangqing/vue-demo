<template>
<!-- <transition name="todo" appear> -->
	<li>
		<label>
			<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
			<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
			<span v-show="!todo.isEdit">{{todo.title}}</span>
			<input 
			v-show="todo.isEdit" 
			type="text" 
			:value="todo.title" 
			@blur="handlerBlur(todo,$event)"
			ref="inputTitle">
		</label>
		<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
		<button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
	</li>
<!-- </transition> -->
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'MyItem',
		//声明接收todo
		props:['todo'],
		methods: {
			//勾选or取消勾选
			handleCheck(id){
				//通知App组件将对应的todo对象的done值取反
				// this.checkTodo(id)
				this.$bus.$emit('checkTodo',id)
			},
			//删除
			handleDelete(id){
				if(confirm('确定删除吗？')){
					//通知App组件将对应的todo对象删除
					// this.deleteTodo(id)
					// this.$bus.$emit('deleteTodo',id)
					pubsub.publish('deleteTodo',id)
				}
			},
			// 编辑
			handleEdit(todo){
				// eslint-disable-next-line no-prototype-builtins
				if(todo.hasOwnProperty('isEdit')){
					todo.isEdit = true
				} else {
					// console.log('todo身上没有isEdit')
					this.$set(todo,'isEdit',true)
				}
				// 编辑的时候，自动获取焦点，因为 input 还没有渲染到页面，所以可以用一个延时器来设置获取焦点
				// setTimeout(() => {
				// 	this.$refs.inputTitle.focus()
				// }, 200)
				// 也可以用 nextTick ，可以指定一个回调，它会在 DOM 更新完毕之后再执行
				this.$nextTick(function(){
					this.$refs.inputTitle.focus()
				})
			},
			// 失去焦点回调（真正执行修改逻辑）
			handlerBlur(todo,e){
				todo.isEdit = false
				if(!e.target.value.trim()) return alert('输入不能为空')
				this.$bus.$emit('updateTodo',todo.id,e.target.value)
			}
		},
	}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
	/* .todo-enter-active{
    animation: atguigu 1s linear;
}
	.todo-leave-active{	
		animation: atguigu 1s linear reverse;
	}

	@keyframes atguigu {
		from{
			transform: translateX(-1000px)
		}
		to{
			transform: translateX(0px)
		}
	} */
</style>