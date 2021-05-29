<template>
    <Vuedar :dates="{'26052021': true}" v-on:change_day="r => console.log(r)">
    </Vuedar>
</template>
<script>
/* eslint-disable */
// import Vuedar from '@ersolucoesweb/vuedar'
import Vuedar from '../src/Vuedar'
import axios from 'axios'
export default {
    components: {
        Vuedar
    },
    data() {
        return {
            console: console
        }
    }
}
</script>