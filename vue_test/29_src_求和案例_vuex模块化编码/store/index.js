// 该文件用于创建 Vuex中最核心的 store

import Vue from 'vue'
// 引入 Vuex
import Vuex from "vuex"
// 使用vuex插件
Vue.use(Vuex)

import countOptions from './count'
import personOptions from './person'

// // 求和功能相关的配置
// const countOptions = {
//     // 如果想在mapState 里面通过 第一个参数去指定分类，需要在配置vuex的时候，给每一个配置都加上命名空间： namespaced
//     namespaced:true,
//     actions:{
//         jiaOdd(context,value){
//             if(context.state.sum %2){
//              context.commit('JIA',value)
//             }
//         },
//         jiaWait(context,value){
//             setTimeout(() => {
//             context.commit('JIA',value)
//             }, 500)
//         }
//     },
//     mutations:{
//         JIA(state, value){
//             // console.log('mutations中的 JIA 被调用了')
//             state.sum += value
//         },
//         JIAN(state, value){
//             state.sum -= value
//         }
//     },
//     state:{
//         sum: 0 ,
//         school: '尚硅谷',
//         subject: '前端'
//     },
//     getters:{
//         bigSum (state){
//             return state.sum*10
//         }   
//     }
// }

// // 人员管理相关的配置
// const personOptions = {
//     namespaced:true,
//     actions:{
//         addPersonWang(context,value){
//             if (value.name.indexOf('王')===0){
//             context.commit('ADD_PERSON',value)
//             } else {
//                 alert('添加的人必须姓王')
//             }
//         }
//     },
//     mutations:{
//         ADD_PERSON(state,value){
//             console.log('mutations中的ADD_PERSON被调用了')
//             state.personList.unshift(value)
//         }
//     },
//     state:{
//         personList:[
//         {id:'001',name:'张三'}
//         ]
//     },
//     getters:{
//         firstPersonName(state){
//             return state.personList[0].name
//         }
//     }
// }


// 创建并暴露 store
export default new Vuex.Store({
   modules:{
    // a: countOptions,
    // b: personOptions
    countAbout: countOptions,
    personAbout: personOptions
   }
})
