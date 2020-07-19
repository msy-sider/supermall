import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

//1.安装插件
Vue.use(Vuex)

//2.创建对象

const state = {
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
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a: moduleA
    }
})

//3.导出store独享
export default store