export default {
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
}