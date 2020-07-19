import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const moduleA = {
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

const store = new Vuex.Store({
    state: {
        //定义共享的状态
        counter: 1000,
        students: [{
                id: 110,
                name: 'msy',
                age: 20
            },
            {
                id: 111,
                name: 'lebron',
                age: 35
            },
            {
                id: 112,
                name: 'curry',
                age: 33
            },
            {
                id: 113,
                name: 'kelay',
                age: 30
            }
        ],
        info: {
            name: 'curry',
            age: 33,
            height: 1.91
        }
    },
    mutations: {
        //方法
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementCount(state, payload) {
            state.counter += payload.count
        },
        addStudent(state, stu) {
            state.students.push(stu)
        },
        updateInfo(state) {
            state.info.name = 'msy'

            //响应式添加属性
            //Vue.set(state.info, 'address', 'LA')

            //响应式删除属性
            // Vue.delete(state.info, 'age')
        }
    },
    actions: {
        //context：上下文
        /*aUpdateInfo(context, payload) {
            setTimeout(() => {
                context.commit('updateInfo')
                console.log(payload.message);
                payload.success()

            }, 1000);
        }*/

        //使用Promise方法：
        aUpdateInfo(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('updateInfo');
                    console.log(payload);
                    resolve('111111');
                }, 1000);
            })
        }
    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        more30stu(state) {
            return state.students.filter(s => s.age > 30)
        },
        more30stulength(state, getters) {
            return getters.more30stu.length
        },
        moreAgeStu(state) {
            return age => {
                return state.students.filter(s => s.age > age)
            }
        }
    },
    modules: {
        a: moduleA
    }
})

//3.导出store独享
export default store