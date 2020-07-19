<template>
  <div id="app">
    <h2>------------APP内容：modules内容----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click='updateName'>修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click='asyncUpdateName'>异步修改名字</button>

    <h2>------------APP内容：info是否是响应式----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click='updateInfo'>修改信息</button>

    <h2>-----------App内容----------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click='add'>+</button>
    <button @click='sub'>-</button>
    <button @click='addCount(5)'>+5</button>
    <button @click='addCount(10)'>+10</button>
    <button @click='addStudent'>添加学生</button>

    <h2>------------APP内容：getters相关信息----------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more30stu}}</h2>
    <h2>{{$store.getters.more30stulength}}</h2>
    <h2>{{$store.getters.moreAgeStu(33)}}</h2>

    <h2>------------Hello Vuex内容-----------</h2>
   <hello-vuex ></hello-vuex>
  </div>
</template>

<script>
    import HelloVuex from './components/HelloVuex.vue'
    export default {
        name: 'App',
        components: {
            HelloVuex
        },
        data() {
            return {
                message: '我是APP组件',
            }
        },
        methods: {
            add() {
                this.$store.commit('increment')
            },
            sub() {
                this.$store.commit('decrement')
            },
            addCount(count) {
                // payload:负载
                //1.普通的提交封装
                //this.$store.commit('incrementCount', count)

                //2.特殊的提交封装
                this.$store.commit({
                    type: 'incrementCount',
                    count
                })
            },
            addStudent() {
                const stu = {
                    id: 114,
                    name: 'alan',
                    age: 35
                }
                this.$store.commit('addStudent', stu)
            },
            updateInfo() {
                //this.$store.commit("updateInfo")
                /*this.$store.dispatch('aUpdateInfo', {
                    message: '我是携带信息',
                    success: () => {
                        console.log('里面已经完成了');

                    }
                })*/

                //使用Promise方法
                this.$store.dispatch('aUpdateInfo', '我是携带的信息').then(res => {
                    console.log('里面完成了提交');
                    console.log(res);
                })
            },
            updateName() {
                this.$store.commit('updateName', 'msy')
            },
            asyncUpdateName() {
                this.$store.dispatch('aUpdateName')
            }
        }
    }
</script>

<style>

</style>