export default {
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
}