# Vuedar

## Props

| Prop name    | Description                                                                                                                                                                                                                                   | Type   | Values | Default                                                                                                                          |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| years        | Years for selection<br/>`@type` Array<br/>`@default` [2021, 2022, 2023, 2024, 2025]<br/>`@author` ER Soluções Web <contato@ersolcuoesweb.com.br>                                                                                              | func   | -      | () => [2021, 2022, 2023, 2024, 2025]                                                                                             |
| months       | Months for selection<br/>`@type` Array<br/>`@default` ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]<br/>`@author` ER Soluções Web <contato@ersolcuoesweb.com.br> | func   | -      | () => ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] |
| weekdays     | Weekdays namonth<br/>`@type` Array<br/>`@default` ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']<br/>`@author` ER Soluções Web <contato@ersolcuoesweb.com.br>                                                 | func   | -      | () => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']                                             |
| dates        | Dates to create calendar highlight markup<br/>`@type` Object<br/>`@default` new Object                                                                                                                                                        | object | -      | () => new Object                                                                                                                 |
| current_date | Current selected date<br/>`@type` Date<br/>`@default` new Date                                                                                                                                                                                | date   | -      | () => new Date()                                                                                                                 |

## Events

| Event name   | Properties | Description |
| ------------ | ---------- | ----------- |
| change_year  |            |
| change_month |            |
| change_date  |            |
| change_day   |            |
| nav_next     |            |
| nav_prev     |            |

## Slots

| Name     | Description                            | Bindings |
| -------- | -------------------------------------- | -------- |
| header   | header                                 |          |
| year     | {year} Year selection dropdown         |          |
| month    | {month} Month selection dropdown       |          |
| nav      | {nav} Navigation                       |          |
| body     | {body} Calendar content                |          |
| weekdays | {weekdays} Weekdays on top of calendar |          |
| day      | {day} Days in month                    |          |

---

<a href="https://github.com/albreis/vuedar/edit/master/documentation/src/wrapper.js" class="docgen-edit-link">Algo errado? Avise-nos!</a>

// Import vue component
import component from './Vuedar.vue';

// Declare install function executed by Vue.use()
export function install(Vue) {
if (install.installed) return;
install.installed = true;
Vue.component('Vuedar', component);
}

// Create module definition for Vue.use()
const plugin = {
install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
GlobalVue = global.Vue;
}
if (GlobalVue) {
GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default component;
