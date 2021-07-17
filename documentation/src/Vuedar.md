# Vuedar

> Componente para criação de calendarios

## Props

| Prop name    | Description                               | Type   | Values | Default                                                                                                                    |
| ------------ | ----------------------------------------- | ------ | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| years        | Years for selection                       | array  | -      | [2021, 2022, 2023, 2024, 2025]                                                                                             |
| months       | Avaiable months to selection              | array  | -      | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]                                                                                    |
| monthsNames  | Months names                              | array  | -      | ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] |
| weekdays     | Weekdays                                  | array  | -      | ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']                                             |
| firstWeekDay | First weekday                             | number | -      | () => 0                                                                                                                    |
| dates        | Dates to create calendar highlight markup | object | -      | () => {}                                                                                                                   |
| current_date | Current selected date                     | date   | -      | () => new Date()                                                                                                           |

## Events

| Event name   | Properties                                     | Description                                   |
| ------------ | ---------------------------------------------- | --------------------------------------------- |
| change_year  | **Date** `active_date` - Current selected date | Event triggered on year change                |
| change_month | **Date** `active_date` - Current selected date | Event triggered on month change               |
| change_day   | **Date** `active_date` - Current selected date | Event triggered on day click                  |
| change_date  | **Date** `active_date` - Current selected date | Event triggered on date change                |
| nav_next     | **Date** `active_date` - Current selected date | Event triggered when click in NEXT button     |
| nav_prev     | **Date** `active_date` - Current selected date | Event triggered when click in PREVIOUS button |

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
