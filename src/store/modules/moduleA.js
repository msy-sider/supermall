export default {
    state: {
        name: 'migos'
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        aUpdateName(context) {
            setTimeout(() => {
                //这里的context.commit传递的状态是到自己的mutation
                context.commit('updateName', 'wangwu')
            }, 1000);
        }
    },
    getters: {
        fullname(state) {
            return state.name + '1111'
        },
        fullname2(state, getters) {
            return getters.fullname + '2222'
        },
        fullname3(state, getters, rootState) {
            //如果想在模块里面用到下面store对象的数据，则用rooteState
            return getters.fullname2 + rootState.counter
        }
    }
}