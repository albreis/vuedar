# Vuedar

> Componente para criação de calendarios

## Props

| Prop name    | Description                               | Type   | Values | Default                                                                                                                    |
| ------------ | ----------------------------------------- | ------ | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| locale       | Localization of months and weekdays names | string | -      | () => navigator.language                                                                                                   |
| years        | Years for selection                       | array  | -      | [2021, 2022, 2023, 2024, 2025]                                                                                             |
| months       | Avaiable months to selection              | array  | -      | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]                                                                                    |
| monthsNames  | Months names                              | array  | -      | ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] |
| weekdays     | Weekdays                                  | array  | -      | ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']                                             |
| firstWeekDay | First weekday                             | number | -      | () => 0                                                                                                                    |
| dates        | Dates to create calendar highlight markup | object | -      | () => {}                                                                                                                   |
| current_date | Current selected date                     | date   | -      | () => new Date()                                                                                                           |

## Events

| Event name      | Properties                                     | Description                                   |
| --------------- | ---------------------------------------------- | --------------------------------------------- |
| change_year     | **Date** `active_date` - Current selected date | Event triggered on year change                |
| change_month    | **Date** `active_date` - Current selected date | Event triggered on month change               |
| change_day      | **Date** `active_date` - Current selected date | Event triggered on day click                  |
| change_date     | **Date** `active_date` - Current selected date | Event triggered on date change                |
| select_year     |                                                |
| select_month    |                                                |
| click_day       |                                                |
| nav_next        | **Date** `active_date` - Current selected date | Event triggered when click in NEXT button     |
| nav_prev        | **Date** `active_date` - Current selected date | Event triggered when click in PREVIOUS button |
| update_calendar |                                                |

## Slots

| Name     | Description                 | Bindings |
| -------- | --------------------------- | -------- |
| header   | header                      |          |
| year     | Year selection dropdown     |          |
| month    | Month selection dropdown    |          |
| nav      | Navigation                  |          |
| body     | Calendar content            |          |
| weekdays | Weekdays on top of calendar |          |
| day      | Days in month               |          |

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
