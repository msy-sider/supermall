<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.state.info}}</h2>
  </div>
 </template>

<script>
    export default {
        name: 'HelloVuex',
        data() {
            return {

            };
        },

        components: {},

        computed: {},

        beforeMount() {},

        mounted() {},

        methods: {},

        watch: {}

    }
</script>
<style>

</style>