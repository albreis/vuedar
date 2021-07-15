<template>
    <div class="calendar-dates" id="calendar-dates" :class="{loading: loading, 'disabled-year': years.indexOf(selected_year) == -1, 'disabled-month': months.indexOf(selected_month) == -1}">
        <!-- @slot header -->
        <slot name="header">
            <div class="calendar-header">
                <!-- @slot Year selection dropdown -->
                <slot name="year">
                    <div class="ano" :class="{active: selectYear}">
                        <span @click="selectYear = !selectYear" class="ano-selected">{{selected_year}}</span>
                        <ul>
                            <!-- @bind Year available -->
                            <li v-for="(ano, k) in years" :key="ano" v-html="ano" @click="setYear(ano, k)"></li>
                        </ul>
                    </div>
                </slot>
                <!-- @slot Month selection dropdown -->
                <slot name="month">
                    <div class="month" :class="{active: selectMonth}">
                        <span @click="selectMonth = !selectMonth" class="month-selected">{{selected_month}}</span>
                        <ul>
                            <!-- @bind Months names -->
                            <li v-for="(month, k) in months" :key="month" v-html="monthsNames[month]" @click="setMonth(month, k)"></li>
                        </ul>
                    </div>
                </slot>
                <!-- @slot Navigation -->
                <slot name="nav">
                    <div class="nav">
                        <div @click="prev" class="prev"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>
                        <div @click="next" class="next"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></div>
                    </div>
                </slot>
            </div>
        </slot>
        <!-- @slot Calendar content -->
        <slot name="body">
            <div class="calendar-body">
                <!-- @slot Weekdays on top of calendar -->
                <slot name="weekdays">
                    <div class="days-weekdays">
                        <!-- @bind Weekdays -->
                        <strong v-for="wday in weekdays" :key="wday">{{wday.substr(0,3)}}</strong>
                    </div>
                </slot>
                <!-- @slot Days in month -->
                <slot name="day">
                    <div class="days-month">
                        <div class="dia disabled" :class="{event: dates[`${d.toString().padStart(2, '0')}${(selected_month_key+1).toString().padStart(2, '0')}${selected_year}`]}" v-for="d in initialDay" :key="`a${d}`"><span>{{(lastMonth.getDate() - initialDay) + d}}</span></div>
                        <!-- @bind Dates to highlights in calendar -->
                        <div class="dia" v-for="d in days" :key="`b${d}`" :class="{today: d == today.getDate() && selected_month_key == today.getMonth() && selected_year == today.getFullYear(), selected: selected_day == d, event: dates[`${d.toString().padStart(2, '0')}${(selected_month_key+1).toString().padStart(2, '0')}${selected_year}`]}" @click="setDay(d)"><span>{{d}}</span></div>
                        <div class="dia disabled" :class="{event: dates[`${d.toString().padStart(2, '0')}${(selected_month_key+1).toString().padStart(2, '0')}${selected_year}`]}" v-for="d in (6 - finalDay)" :key="`c${d}`"><span>{{d}}</span></div>
                    </div>
                </slot>
            </div>
        </slot>
    </div>
</template>

<script>
/**
 * Componente para criação de calendarios
 */
export default {
    props: {
        /**
         * Years for selection
         */
        years: {
            type: Array,
            default: () => [2021, 2022, 2023, 2024, 2025]
        },

        /**
         * Avaiable months to selection
         */
        months: {
            type: Array,
            default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },

        /**
         * Months names
         */
        monthsNames: {
            type: Array,
            default: () => ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },

        /**
         * Weekdays
         */
        weekdays: {
            type: Array,
            default: () => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        },

        /**
         * Dates to create calendar highlight markup
         */
        dates: {
            type: Object,
            default: () => {}
        },

        /**
         * Current selected date
         */
        current_date: {
            type: Date,
            default: () => new Date()
        }
    },
    computed: {
        active_date: {
            set: function(v) {
                this.current_date
            },
            get: function() {
                return this.current_date
            }
        }
    },
    data(){
        return {
            /**
             * Open to select year
             */
            selectYear: false,

            /**
             * Open to select month
             */
            selectMonth: false,

            /**
             * Selected year
             */
            selected_year: null,

            /**
             * Selected month name
             */
            selected_month: null,

            /**
             * Selected month number
             */
            selected_month_key: null,

            /**
             * Selected day
             */
            selected_day: 0,

            /**
             * Last month
             */
            lastMonth: null,

            /**
             * Current date
             */
            today: new Date(),

            /**
             * Start date
             */
            startDate: null,

            /**
             * End date
             */
            endDate: null,

            /**
             * Initial day of month
             */
            initialDay: null,

            /**
             * Final day of month
             */
            finalDay: null,

            /**
             * Total days in current month
             */
            days: 0,
            loading: false
        }
    },
    mounted() {
        /**
         * Set current year
         */
        this.selected_year = this.active_date.getFullYear()

        /**
         * Set current month name
         */
        this.selected_month = this.months.includes(this.active_date.getMonth()) ? this.monthsNames[this.active_date.getMonth()] : this.monthsNames[this.months[0]];

        /**
         * Set current month number
         */
        this.selected_month_key = this.months.includes(this.active_date.getMonth()) ? this.months.indexOf(this.active_date.getMonth()) : this.months[0];

        /**
         * Set current day
         */
        this.selected_day = this.active_date.getDate();

        /**
         * Update calendar interface
         */
        this.update()
    },
    watch: {
        /**
         * On change year
         * @event change_year
         */
        selected_year() {
            /**
             * Event triggered on year change
             * 
             * @property {active_date} Date Current selected date
             */
            this.$emit('change_year', this.active_date)
            this.update()
        },

        /**
         * On change month
         * @event change_month
         */
        selected_month() {
            /**
             * Event triggered on month change
             * 
             * @property {active_date} Date Current selected date
             */
            this.$emit('change_month', this.active_date)
            this.update()
        },

        /**
         * On change month
         * @event change_day
         */
        selected_day() {
            /**
             * Event triggered on day click
             * 
             * @property {active_date} Date Current selected date
             */
            this.$emit('change_day', this.active_date)
            this.update()
        },

        /**
         * On change date
         * @event change_date
         */
        active_date() {
            /**
             * Event triggered on date change
             * 
             * @property {active_date} Date Current selected date
             */
            this.$emit('change_date', this.active_date)
            this.update()
        }
    },
    methods: {
        /**
         * Change year
         * @method
         * @param m Year name
         * @param k Key in years array
         */
        setYear(m, k) {
            this.selected_year = m
            this.selected_year_key = k
            this.selectYear = false
            this.selected_day = null
            if(this.selected_year == this.today.getFullYear() && this.months[this.selected_month_key] == this.today.getMonth()) {
                this.selected_day = this.today.getDate()
            }
        },

        /**
         * Change month
         * @method
         * @param m Month name
         * @param k Month number
         */
        setMonth(m, k) {
            this.selected_month = this.monthsNames[m]
            this.selected_month_key = k
            this.selectMonth = false
            this.selected_day = null
            if(this.selected_year == this.today.getFullYear() && this.months[this.selected_month_key] == this.today.getMonth()) {
                this.selected_day = this.today.getDate()
            }
        },

        /**
         * Change day
         * @method
         * @param m Day
         */
        setDay(m) {
            this.selected_day = m
            this.active_date = new Date
            this.active_date.setDate(m)

            this.$emit('change_day', this.active_date)
        },

        /**
         * Change date to next month
         * @method
         * @event nav_next
         */
        next() {
            this.selected_month_key++
            if(this.selected_month_key > (this.months.length - 1)) {
                this.selected_month_key = 0
                this.selected_year++
            }
            console.log(this.selected_month_key, this.months[this.selected_month_key])
            this.selected_month = this.monthsNames[this.months[this.selected_month_key]-1]
            this.selected_day = null
            if(this.months[this.selected_month_key] == this.today.getMonth() && this.selected_year == this.today.getFullYear()) {
                this.selected_day = this.today.getDate()
            }

            /**
             * Event triggered when click in NEXT button
             * 
             * @property {active_date} Date Current selected date
             */
            this.$emit('nav_next', this.active_date)
        },

        /**
         * Change date to previous month
         * @method
         * @event nav_prev
         */
        prev() {
            this.selected_month_key--
            if(this.selected_month_key < 0) {
                this.selected_month_key = (this.months.length - 1)
                this.selected_year--
            }
            this.selected_month = this.monthsNames[this.months[this.selected_month_key]]
            this.selected_day = null
            if(this.months[this.selected_month_key] == this.today.getMonth() && this.selected_year == this.today.getFullYear()) {
                this.selected_day = this.today.getDate()
            }

            /**
             * Event triggered when click in PREVIOUS button
             * 
             * @property {active_date} Date Current selected date
             */
            this.$emit('nav_prev', this.active_date)
        },

        /**
         * Update calendar interface after change the date
         */
        update() {
            this.lastMonth = new Date(this.selected_year, this.months[this.selected_month_key], 0);
            this.startDate = new Date(this.selected_year, this.months[this.selected_month_key], 1);
            this.endDate = new Date(this.selected_year, this.months[this.selected_month_key] + 1, 0);
            this.initialDay = this.startDate.getDay()
            this.finalDay = this.endDate.getDay()
            this.days = this.endDate.getDate()
            this.today = new Date
        }
    }
}
</script>
<style lang="stylus" scoped>
#calendar-dates
    max-width 500px
    display block
    margin auto auto 50px auto
    position relative
    font-family Arial, Verdana, 'sans-serif'
    &.loading 
        .calendar-body:before
            content ''
            position absolute
            left 0
            top 0
            width 100%
            height 100%
            border-radius inherit
            background-color rgba(255,255,255,0.5)
            background-repeat no-repeat
            background-position center
            background-size 80px
            z-index 10
    .calendar-header
        display flex
        align-items center
        width 100%
        .nav 
            display flex
            align-items center
            justify-content space-between
            margin-left auto
            width 100px
            .next, .prev
                cursor pointer
            svg
                transform scale(0.4)
                position relative
                path
                    fill #99c93c
            .prev
                svg
                    left -2px
            .next
                svg
                    right -2px
            > div
                border-radius 30px
                background #fff
                color #000
                font-weight:bold
                display flex
                align-items center
                justify-content center
                width 30px
                height 30px
                border 2px solid #99c93c
        > div
            position relative
            ul
                position absolute
                top 105%
                left 0
                z-index 9
                list-style none
                margin 0
                background #fff
                width 100%
                box-shadow 0 0 5px rgba(0,0,0,0.1)
                border-radius 4px
                padding 0
                li
                    cursor pointer
                    padding 10px 15px
                    text-align center
                    margin 0
                    &:hover
                        background #dfdfdf
        > div:not(.active) 
            ul
                display none
        .ano-selected
            padding 5px 15px
            border-radius 30px
            border 2px solid #99c93c
            background #fff
            cursor pointer
        .month
            margin-left 30px
        .month-selected
            padding 5px 15px
            border-radius 30px
            border 2px solid #fff
            background #99c93c
            min-width 200px
            color #fff
            display inline-block
            text-align center
            cursor pointer
    .calendar-body
        position relative
        padding 15px
        background #fff
        box-shadow 0 0 10px rgba(0,0,0,0.1)
        margin-top 30px
        .days-weekdays
            display flex
            strong
                display flex
                width calc(100% / 7)
                align-items center
                justify-content center
        .days-month
            display flex
            flex-wrap wrap
        .dia
            width calc(100% / 7)
            height 50px
            display flex
            align-items center
            justify-content center
            margin 5px 0
            &.event 
                span
                    background #ddd
            &.disabled
                color #aaa
            span
                width 50px
                height 50px
                border-radius 50px
                display flex
                align-items center
                justify-content center
                position relative
                cursor pointer
            &.selected 
                span
                    background #99c93c
                    color #fff
            &.today 
                span
                    border:1px solid orangered
@media all and (max-width 800px)
    .calendar-header 
        .month-selected
            min-width 150px
    .calendar-body 
        .dia
            height 40px
            span
                width 40px
                height 40px
</style>