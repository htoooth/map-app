<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        mounted() {
            window.$.parser.parse();
        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>

<style>
html,
body {
  margin: 0px;
  height: 100%;
  width: 100%;
}


</style>
