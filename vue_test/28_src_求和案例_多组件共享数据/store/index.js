// 该文件用于创建 Vuex中最核心的 store

import Vue from 'vue'
// 引入 Vuex
import Vuex from "vuex"
// 使用vuex插件
Vue.use(Vuex)
// 准备 actions ———— 用于响应组件中的动作
const actions = {
    // 第一个参数是context上下文： commit，第二个参数是传入的值 
    // jia(context,value){
    //     // console.log('actions中的 jia 被调用了')
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     context.commit('JIAN',value)
    // },
    jiaOdd(context,value){
        if(context.state.sum %2){
         context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(() => {
        context.commit('JIA',value)
        }, 500)
    }
}

// 准备 mutations ———— 用于操作数据（state)
const mutations = {
    // 第一个参数是 state, 第二个参数是 value
    JIA(state, value){
        // console.log('mutations中的 JIA 被调用了')
        state.sum += value
    },
    JIAN(state, value){
        state.sum -= value
    },
    ADD_PERSON(state,value){
        console.log('mutations中的ADD_PERSON被调用了')
        state.personList.unshift(value)
    }
}

// 准备 state ———— 用于存储数据
const state = {
    sum: 0 ,
    school: '尚硅谷',
    subject: '前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}


// 准备 getters —————— 用于将 state 中的数据，进行加工
const getters = {
    // 这个能收到参数，收到的参数是state,通过返回值来决定自己的值
    bigSum (state){
        return state.sum*10
    }
}

// 创建并暴露 store
export default new Vuex.Store({
    // ...
    actions,
    mutations,
    state,
    getters
})
