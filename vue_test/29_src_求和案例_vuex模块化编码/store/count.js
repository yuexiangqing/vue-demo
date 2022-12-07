// 求和功能相关的配置
const countOptions = {
    // 如果想在mapState 里面通过 第一个参数去指定分类，需要在配置vuex的时候，给每一个配置都加上命名空间： namespaced
    namespaced:true,
    actions:{
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
    },
    mutations:{
        JIA(state, value){
            // console.log('mutations中的 JIA 被调用了')
            state.sum += value
        },
        JIAN(state, value){
            state.sum -= value
        }
    },
    state:{
        sum: 0 ,
        school: '尚硅谷',
        subject: '前端'
    },
    getters:{
        bigSum (state){
            return state.sum*10
        }   
    }
}
export default countOptions