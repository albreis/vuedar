<template>
    <Vuedar :dates="{'26052021': true}" :months="[1, 4, 6, 8]" :years="[2021, 2022, 2023]" />
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
    }
}
</script>