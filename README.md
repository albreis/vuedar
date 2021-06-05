# Vuedar

Componente para criar calendário

![Calendário VueJS](https://raw.github.com/albreis/vuedar/master/print.png)

## Instalação 

```properties
yarn add @ersolucoesweb/vuedar
```

ou

```properties
npm i -s @ersolucoesweb/vuedar
```

## Exemplo:
```
<template>
    <calendario :dates="dates" :months="months" :years="years" />
</template>

<script>
import Vuedar from '@ersolucoesweb/vuedar'
export default {
    components: {
        calendario: Vuedar
    },
    data() {
        return {
            dates: {
                // Dias para marcar no calendário
                //ddmmyyyy
                '26052021': true
            },
            // Meses disponíveis para seleção
            months: [1, 4, 8],

            // Anos disponíveis para seleção
            years: [2021, 2022, 2023]
        }
    }
}
</script>
```

Acesse a documentação em https://albreis.github.io/vuedar/

## Suporte 
https://www.ersolucoesweb.com.br