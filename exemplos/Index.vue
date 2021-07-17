<template>
    <Vuedar :firstWeekDay="1" :weekdays="weekdays" :months="[1, 4, 7, 8]" :years="[2021, 2022, 2023]" />
</template>
<script>
/**
 * Para usar esse componente faça o seguinte
 */
/* eslint-disable */
// import Vuedar from '@ersolucoesweb/vuedar'
import Vuedar from '../src/Vuedar'
export default {
    components: {
        Vuedar
    },
    data() {
        return {
            weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        }
    }
}
</script>