var e={props:{years:{type:Array,default:function(){return[2021,2022,2023,2024,2025]}},months:{type:Array,default:function(){return[1,2,3,4,5,6,7,8,9,10,11,12]}},monthsNames:{type:Array,default:function(){return["January","February","March","April","May","June","July","August","September","October","November","December"]}},weekdays:{type:Array,default:function(){return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}},dates:{type:Object,default:function(){}},current_date:{type:Date,default:function(){return new Date}}},computed:{active_date:{set:function(e){this.current_date},get:function(){return this.current_date}}},data:function(){return{selectYear:!1,selectMonth:!1,selected_year:null,selected_month:null,selected_month_key:null,selected_day:0,lastMonth:null,today:new Date,startDate:null,endDate:null,initialDay:null,finalDay:null,days:0,loading:!1}},mounted:function(){this.selected_year=this.active_date.getFullYear(),this.selected_month=this.monthsNames[this.months[0]],this.selected_month_key=this.months[0],this.selected_day=this.active_date.getDate(),this.update()},watch:{selected_year:function(){this.$emit("change_year",this.active_date),this.update()},selected_month:function(){this.$emit("change_month",this.active_date),this.update()},selected_day:function(){this.$emit("change_day",this.active_date),this.update()},active_date:function(){this.$emit("change_date",this.active_date),this.update()}},methods:{setYear:function(e,n){this.selected_year=e,this.selected_year_key=n,this.selectYear=!1,this.selected_day=null,this.selected_year==this.today.getFullYear()&&this.months[this.selected_month_key]==this.today.getMonth()&&(this.selected_day=this.today.getDate())},setMonth:function(e,n){this.selected_month=this.monthsNames[e],this.selected_month_key=n,this.selectMonth=!1,this.selected_day=null,this.selected_year==this.today.getFullYear()&&this.months[this.selected_month_key]==this.today.getMonth()&&(this.selected_day=this.today.getDate())},setDay:function(e){this.selected_day=e,this.active_date=new Date,this.active_date.setDate(e),this.$emit("change_day",this.active_date)},next:function(){this.selected_month_key++,this.selected_month_key>this.months.length-1&&(this.selected_month_key=0,this.selected_year++),console.log(this.selected_month_key,this.months[this.selected_month_key]),this.selected_month=this.monthsNames[this.months[this.selected_month_key]-1],this.selected_day=null,this.months[this.selected_month_key]==this.today.getMonth()&&this.selected_year==this.today.getFullYear()&&(this.selected_day=this.today.getDate()),this.$emit("nav_next",this.active_date)},prev:function(){this.selected_month_key--,this.selected_month_key<0&&(this.selected_month_key=this.months.length-1,this.selected_year--),this.selected_month=this.monthsNames[this.months[this.selected_month_key]],this.selected_day=null,this.months[this.selected_month_key]==this.today.getMonth()&&this.selected_year==this.today.getFullYear()&&(this.selected_day=this.today.getDate()),this.$emit("nav_prev",this.active_date)},update:function(){this.lastMonth=new Date(this.selected_year,this.months[this.selected_month_key],0),this.startDate=new Date(this.selected_year,this.months[this.selected_month_key],1),this.endDate=new Date(this.selected_year,this.months[this.selected_month_key]+1,0),this.initialDay=this.startDate.getDay(),this.finalDay=this.endDate.getDay(),this.days=this.endDate.getDate(),this.today=new Date}}};function n(e,n,t,a,d,s,i,r,l,o){"boolean"!=typeof i&&(l=r,r=i,i=!1);var c,A="function"==typeof t?t.options:t;if(e&&e.render&&(A.render=e.render,A.staticRenderFns=e.staticRenderFns,A._compiled=!0,d&&(A.functional=!0)),a&&(A._scopeId=a),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},A._ssrRegister=c):n&&(c=i?function(e){n.call(this,o(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,r(e))}),c)if(A.functional){var h=A.render;A.render=function(e,n){return c.call(n),h(e,n)}}else{var y=A.beforeCreate;A.beforeCreate=y?[].concat(y,c):[c]}return t}var t,a="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function d(e){return function(e,n){return function(e,n){var d=a?n.media||"default":e,i=s[d]||(s[d]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var r=n.source;if(n.map&&(r+="\n/*# sourceURL="+n.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",n.media&&i.element.setAttribute("media",n.media),void 0===t&&(t=document.head||document.getElementsByTagName("head")[0]),t.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(r),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var l=i.ids.size-1,o=document.createTextNode(r),c=i.element.childNodes;c[l]&&i.element.removeChild(c[l]),c.length?i.element.insertBefore(o,c[l]):i.element.appendChild(o)}}}(e,n)}}var s={};var i=e,r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"calendar-dates",class:{loading:e.loading,"disabled-year":-1==e.years.indexOf(e.selected_year),"disabled-month":-1==e.months.indexOf(e.selected_month)},attrs:{id:"calendar-dates"}},[e._t("header",[t("div",{staticClass:"calendar-header"},[e._t("year",[t("div",{staticClass:"ano",class:{active:e.selectYear}},[t("span",{staticClass:"ano-selected",on:{click:function(n){e.selectYear=!e.selectYear}}},[e._v(e._s(e.selected_year))]),e._v(" "),t("ul",e._l(e.years,(function(n,a){return t("li",{key:n,domProps:{innerHTML:e._s(n)},on:{click:function(t){return e.setYear(n,a)}}})})),0)])]),e._v(" "),e._t("month",[t("div",{staticClass:"month",class:{active:e.selectMonth}},[t("span",{staticClass:"month-selected",on:{click:function(n){e.selectMonth=!e.selectMonth}}},[e._v(e._s(e.selected_month))]),e._v(" "),t("ul",e._l(e.months,(function(n,a){return t("li",{key:n,domProps:{innerHTML:e._s(e.monthsNames[n])},on:{click:function(t){return e.setMonth(n,a)}}})})),0)])]),e._v(" "),e._t("nav",[t("div",{staticClass:"nav"},[t("div",{staticClass:"prev",on:{click:e.prev}},[t("svg",{staticClass:"svg-inline--fa fa-chevron-left fa-w-10",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[t("path",{attrs:{fill:"currentColor",d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}})])]),e._v(" "),t("div",{staticClass:"next",on:{click:e.next}},[t("svg",{staticClass:"svg-inline--fa fa-chevron-right fa-w-10",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[t("path",{attrs:{fill:"currentColor",d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}})])])])])],2)]),e._v(" "),e._t("body",[t("div",{staticClass:"calendar-body"},[e._t("weekdays",[t("div",{staticClass:"days-weekdays"},e._l(e.weekdays,(function(n){return t("strong",{key:n},[e._v(e._s(n.substr(0,3)))])})),0)]),e._v(" "),e._t("day",[t("div",{staticClass:"days-month"},[e._l(e.initialDay,(function(n){return t("div",{key:"a"+n,staticClass:"dia disabled",class:{event:e.dates[""+n.toString().padStart(2,"0")+(e.selected_month_key+1).toString().padStart(2,"0")+e.selected_year]}},[t("span",[e._v(e._s(e.lastMonth.getDate()-e.initialDay+n))])])})),e._v(" "),e._l(e.days,(function(n){return t("div",{key:"b"+n,staticClass:"dia",class:{today:n==e.today.getDate()&&e.selected_month_key==e.today.getMonth()&&e.selected_year==e.today.getFullYear(),selected:e.selected_day==n,event:e.dates[""+n.toString().padStart(2,"0")+(e.selected_month_key+1).toString().padStart(2,"0")+e.selected_year]},on:{click:function(t){return e.setDay(n)}}},[t("span",[e._v(e._s(n))])])})),e._v(" "),e._l(6-e.finalDay,(function(n){return t("div",{key:"c"+n,staticClass:"dia disabled",class:{event:e.dates[""+n.toString().padStart(2,"0")+(e.selected_month_key+1).toString().padStart(2,"0")+e.selected_year]}},[t("span",[e._v(e._s(n))])])}))],2)])],2)])],2)};r._withStripped=!0;var l=n({render:r,staticRenderFns:[]},(function(e){e&&e("data-v-1e43e1e6_0",{source:"#calendar-dates[data-v-1e43e1e6] {\n  max-width: 500px;\n  display: block;\n  margin: auto auto 50px auto;\n  position: relative;\n  font-family: Arial, Verdana, 'sans-serif';\n}\n#calendar-dates.loading .calendar-body[data-v-1e43e1e6]:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n  background-color: rgba(255,255,255,0.5);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 80px;\n  z-index: 10;\n}\n#calendar-dates .calendar-header[data-v-1e43e1e6] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n#calendar-dates .calendar-header .nav[data-v-1e43e1e6] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: auto;\n  width: 100px;\n}\n#calendar-dates .calendar-header .nav .next[data-v-1e43e1e6],\n#calendar-dates .calendar-header .nav .prev[data-v-1e43e1e6] {\n  cursor: pointer;\n}\n#calendar-dates .calendar-header .nav svg[data-v-1e43e1e6] {\n  transform: scale(0.4);\n  position: relative;\n}\n#calendar-dates .calendar-header .nav svg path[data-v-1e43e1e6] {\n  fill: #99c93c;\n}\n#calendar-dates .calendar-header .nav .prev svg[data-v-1e43e1e6] {\n  left: -2px;\n}\n#calendar-dates .calendar-header .nav .next svg[data-v-1e43e1e6] {\n  right: -2px;\n}\n#calendar-dates .calendar-header .nav > div[data-v-1e43e1e6] {\n  border-radius: 30px;\n  background: #fff;\n  color: #000;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #99c93c;\n}\n#calendar-dates .calendar-header > div[data-v-1e43e1e6] {\n  position: relative;\n}\n#calendar-dates .calendar-header > div ul[data-v-1e43e1e6] {\n  position: absolute;\n  top: 105%;\n  left: 0;\n  z-index: 9;\n  list-style: none;\n  margin: 0;\n  background: #fff;\n  width: 100%;\n  box-shadow: 0 0 5px rgba(0,0,0,0.1);\n  border-radius: 4px;\n  padding: 0;\n}\n#calendar-dates .calendar-header > div ul li[data-v-1e43e1e6] {\n  cursor: pointer;\n  padding: 10px 15px;\n  text-align: center;\n  margin: 0;\n}\n#calendar-dates .calendar-header > div ul li[data-v-1e43e1e6]:hover {\n  background: #dfdfdf;\n}\n#calendar-dates .calendar-header > div:not(.active) ul[data-v-1e43e1e6] {\n  display: none;\n}\n#calendar-dates .calendar-header .ano-selected[data-v-1e43e1e6] {\n  padding: 5px 15px;\n  border-radius: 30px;\n  border: 2px solid #99c93c;\n  background: #fff;\n  cursor: pointer;\n}\n#calendar-dates .calendar-header .month[data-v-1e43e1e6] {\n  margin-left: 30px;\n}\n#calendar-dates .calendar-header .month-selected[data-v-1e43e1e6] {\n  padding: 5px 15px;\n  border-radius: 30px;\n  border: 2px solid #fff;\n  background: #99c93c;\n  min-width: 200px;\n  color: #fff;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n}\n#calendar-dates .calendar-body[data-v-1e43e1e6] {\n  position: relative;\n  padding: 15px;\n  background: #fff;\n  box-shadow: 0 0 10px rgba(0,0,0,0.1);\n  margin-top: 30px;\n}\n#calendar-dates .calendar-body .days-weekdays[data-v-1e43e1e6] {\n  display: flex;\n}\n#calendar-dates .calendar-body .days-weekdays strong[data-v-1e43e1e6] {\n  display: flex;\n  width: calc(100% / 7);\n  align-items: center;\n  justify-content: center;\n}\n#calendar-dates .calendar-body .days-month[data-v-1e43e1e6] {\n  display: flex;\n  flex-wrap: wrap;\n}\n#calendar-dates .calendar-body .dia[data-v-1e43e1e6] {\n  width: calc(100% / 7);\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 5px 0;\n}\n#calendar-dates .calendar-body .dia.event span[data-v-1e43e1e6] {\n  background: #ddd;\n}\n#calendar-dates .calendar-body .dia.disabled[data-v-1e43e1e6] {\n  color: #aaa;\n}\n#calendar-dates .calendar-body .dia span[data-v-1e43e1e6] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n}\n#calendar-dates .calendar-body .dia.selected span[data-v-1e43e1e6] {\n  background: #99c93c;\n  color: #fff;\n}\n#calendar-dates .calendar-body .dia.today span[data-v-1e43e1e6] {\n  border: 1px solid #ff4500;\n}\n@media all and (max-width: 800px) {\n.calendar-header .month-selected[data-v-1e43e1e6] {\n    min-width: 150px;\n}\n.calendar-body .dia[data-v-1e43e1e6] {\n    height: 40px;\n}\n.calendar-body .dia span[data-v-1e43e1e6] {\n    width: 40px;\n    height: 40px;\n}\n}\n",map:{version:3,sources:["/home/webprodutora/ersolucoesweb.com.br/vuedar/src/Vuedar.vue","Vuedar.vue"],names:[],mappings:"AAmYA;EACA,gBAAA;EACA,cAAA;EACA,2BAAA;EACA,kBAAA;EACA,yCAAA;AClYA;ADoYA;EACA,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,uCAAA;EACA,4BAAA;EACA,2BAAA;EACA,qBAAA;EACA,WAAA;AClYA;ADmYA;EACA,aAAA;EACA,mBAAA;EACA,WAAA;ACjYA;ADkYA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,iBAAA;EACA,YAAA;AChYA;ADiYA;;EACA,eAAA;AC9XA;AD+XA;EACA,qBAAA;EACA,kBAAA;AC7XA;AD8XA;EACA,aAAA;AC5XA;AD8XA;EACA,UAAA;AC5XA;AD8XA;EACA,WAAA;AC5XA;AD6XA;EACA,mBAAA;EACA,gBAAA;EACA,WAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;AC3XA;AD4XA;EACA,kBAAA;AC1XA;AD2XA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,UAAA;EACA,gBAAA;EACA,SAAA;EACA,gBAAA;EACA,WAAA;EACA,mCAAA;EACA,kBAAA;EACA,UAAA;ACzXA;AD0XA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,SAAA;ACxXA;ADyXA;EACA,mBAAA;ACvXA;ADyXA;EACA,aAAA;ACvXA;ADwXA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;ACtXA;ADuXA;EACA,iBAAA;ACrXA;ADsXA;EACA,iBAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,WAAA;EACA,qBAAA;EACA,kBAAA;EACA,eAAA;ACpXA;ADqXA;EACA,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,oCAAA;EACA,gBAAA;ACnXA;ADoXA;EACA,aAAA;AClXA;ADmXA;EACA,aAAA;EACA,qBAAA;EACA,mBAAA;EACA,uBAAA;ACjXA;ADkXA;EACA,aAAA;EACA,eAAA;AChXA;ADiXA;EACA,qBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;AC/WA;ADiXA;EACA,gBAAA;AC/WA;ADgXA;EACA,WAAA;AC9WA;AD+WA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,eAAA;AC7WA;AD+WA;EACA,mBAAA;EACA,WAAA;AC7WA;AD+WA;EACA,yBAAA;AC7WA;AD8WA;AAEA;IACA,gBAAA;AC7WE;AD+WF;IACA,YAAA;AC7WE;AD8WF;IACA,WAAA;IACA,YAAA;AC5WE;AACF",file:"Vuedar.vue",sourcesContent:['<template>\n    <div class="calendar-dates" id="calendar-dates" :class="{loading: loading, \'disabled-year\': years.indexOf(selected_year) == -1, \'disabled-month\': months.indexOf(selected_month) == -1}">\n        \x3c!-- @slot header --\x3e\n        <slot name="header">\n            <div class="calendar-header">\n                \x3c!-- @slot Year selection dropdown --\x3e\n                <slot name="year">\n                    <div class="ano" :class="{active: selectYear}">\n                        <span @click="selectYear = !selectYear" class="ano-selected">{{selected_year}}</span>\n                        <ul>\n                            \x3c!-- @bind Year available --\x3e\n                            <li v-for="(ano, k) in years" :key="ano" v-html="ano" @click="setYear(ano, k)"></li>\n                        </ul>\n                    </div>\n                </slot>\n                \x3c!-- @slot Month selection dropdown --\x3e\n                <slot name="month">\n                    <div class="month" :class="{active: selectMonth}">\n                        <span @click="selectMonth = !selectMonth" class="month-selected">{{selected_month}}</span>\n                        <ul>\n                            \x3c!-- @bind Months names --\x3e\n                            <li v-for="(month, k) in months" :key="month" v-html="monthsNames[month]" @click="setMonth(month, k)"></li>\n                        </ul>\n                    </div>\n                </slot>\n                \x3c!-- @slot Navigation --\x3e\n                <slot name="nav">\n                    <div class="nav">\n                        <div @click="prev" class="prev"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>\n                        <div @click="next" class="next"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></div>\n                    </div>\n                </slot>\n            </div>\n        </slot>\n        \x3c!-- @slot Calendar content --\x3e\n        <slot name="body">\n            <div class="calendar-body">\n                \x3c!-- @slot Weekdays on top of calendar --\x3e\n                <slot name="weekdays">\n                    <div class="days-weekdays">\n                        \x3c!-- @bind Weekdays --\x3e\n                        <strong v-for="wday in weekdays" :key="wday">{{wday.substr(0,3)}}</strong>\n                    </div>\n                </slot>\n                \x3c!-- @slot Days in month --\x3e\n                <slot name="day">\n                    <div class="days-month">\n                        <div class="dia disabled" :class="{event: dates[`${d.toString().padStart(2, \'0\')}${(selected_month_key+1).toString().padStart(2, \'0\')}${selected_year}`]}" v-for="d in initialDay" :key="`a${d}`"><span>{{(lastMonth.getDate() - initialDay) + d}}</span></div>\n                        \x3c!-- @bind Dates to highlights in calendar --\x3e\n                        <div class="dia" v-for="d in days" :key="`b${d}`" :class="{today: d == today.getDate() && selected_month_key == today.getMonth() && selected_year == today.getFullYear(), selected: selected_day == d, event: dates[`${d.toString().padStart(2, \'0\')}${(selected_month_key+1).toString().padStart(2, \'0\')}${selected_year}`]}" @click="setDay(d)"><span>{{d}}</span></div>\n                        <div class="dia disabled" :class="{event: dates[`${d.toString().padStart(2, \'0\')}${(selected_month_key+1).toString().padStart(2, \'0\')}${selected_year}`]}" v-for="d in (6 - finalDay)" :key="`c${d}`"><span>{{d}}</span></div>\n                    </div>\n                </slot>\n            </div>\n        </slot>\n    </div>\n</template>\n\n<script>\n/**\n * Componente para criação de calendarios\n */\nexport default {\n    props: {\n        /**\n         * Years for selection\n         */\n        years: {\n            type: Array,\n            default: () => [2021, 2022, 2023, 2024, 2025]\n        },\n\n        /**\n         * Avaiable months to selection\n         */\n        months: {\n            type: Array,\n            default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]\n        },\n\n        /**\n         * Months names\n         */\n        monthsNames: {\n            type: Array,\n            default: () => ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]\n        },\n\n        /**\n         * Weekdays\n         */\n        weekdays: {\n            type: Array,\n            default: () => [\'Monday\', \'Tuesday\', \'Wednesday\', \'Thursday\', \'Friday\', \'Saturday\', \'Sunday\']\n        },\n\n        /**\n         * Dates to create calendar highlight markup\n         */\n        dates: {\n            type: Object,\n            default: () => {}\n        },\n\n        /**\n         * Current selected date\n         */\n        current_date: {\n            type: Date,\n            default: () => new Date()\n        }\n    },\n    computed: {\n        active_date: {\n            set: function(v) {\n                this.current_date\n            },\n            get: function() {\n                return this.current_date\n            }\n        }\n    },\n    data(){\n        return {\n            /**\n             * Open to select year\n             */\n            selectYear: false,\n\n            /**\n             * Open to select month\n             */\n            selectMonth: false,\n\n            /**\n             * Selected year\n             */\n            selected_year: null,\n\n            /**\n             * Selected month name\n             */\n            selected_month: null,\n\n            /**\n             * Selected month number\n             */\n            selected_month_key: null,\n\n            /**\n             * Selected day\n             */\n            selected_day: 0,\n\n            /**\n             * Last month\n             */\n            lastMonth: null,\n\n            /**\n             * Current date\n             */\n            today: new Date(),\n\n            /**\n             * Start date\n             */\n            startDate: null,\n\n            /**\n             * End date\n             */\n            endDate: null,\n\n            /**\n             * Initial day of month\n             */\n            initialDay: null,\n\n            /**\n             * Final day of month\n             */\n            finalDay: null,\n\n            /**\n             * Total days in current month\n             */\n            days: 0,\n            loading: false\n        }\n    },\n    mounted() {\n        /**\n         * Set current year\n         */\n        this.selected_year = this.active_date.getFullYear()\n\n        /**\n         * Set current month name\n         */\n        this.selected_month = this.monthsNames[this.months[0]];\n\n        /**\n         * Set current month number\n         */\n        this.selected_month_key = this.months[0];\n\n        /**\n         * Set current day\n         */\n        this.selected_day = this.active_date.getDate();\n\n        /**\n         * Update calendar interface\n         */\n        this.update()\n    },\n    watch: {\n        /**\n         * On change year\n         * @event change_year\n         */\n        selected_year() {\n            /**\n             * Event triggered on year change\n             * \n             * @property {active_date} Date Current selected date\n             */\n            this.$emit(\'change_year\', this.active_date)\n            this.update()\n        },\n\n        /**\n         * On change month\n         * @event change_month\n         */\n        selected_month() {\n            /**\n             * Event triggered on month change\n             * \n             * @property {active_date} Date Current selected date\n             */\n            this.$emit(\'change_month\', this.active_date)\n            this.update()\n        },\n\n        /**\n         * On change month\n         * @event change_day\n         */\n        selected_day() {\n            /**\n             * Event triggered on day click\n             * \n             * @property {active_date} Date Current selected date\n             */\n            this.$emit(\'change_day\', this.active_date)\n            this.update()\n        },\n\n        /**\n         * On change date\n         * @event change_date\n         */\n        active_date() {\n            /**\n             * Event triggered on date change\n             * \n             * @property {active_date} Date Current selected date\n             */\n            this.$emit(\'change_date\', this.active_date)\n            this.update()\n        }\n    },\n    methods: {\n        /**\n         * Change year\n         * @method\n         * @param m Year name\n         * @param k Key in years array\n         */\n        setYear(m, k) {\n            this.selected_year = m\n            this.selected_year_key = k\n            this.selectYear = false\n            this.selected_day = null\n            if(this.selected_year == this.today.getFullYear() && this.months[this.selected_month_key] == this.today.getMonth()) {\n                this.selected_day = this.today.getDate()\n            }\n        },\n\n        /**\n         * Change month\n         * @method\n         * @param m Month name\n         * @param k Month number\n         */\n        setMonth(m, k) {\n            this.selected_month = this.monthsNames[m]\n            this.selected_month_key = k\n            this.selectMonth = false\n            this.selected_day = null\n            if(this.selected_year == this.today.getFullYear() && this.months[this.selected_month_key] == this.today.getMonth()) {\n                this.selected_day = this.today.getDate()\n            }\n        },\n\n        /**\n         * Change day\n         * @method\n         * @param m Day\n         */\n        setDay(m) {\n            this.selected_day = m\n            this.active_date = new Date\n            this.active_date.setDate(m)\n\n            this.$emit(\'change_day\', this.active_date)\n        },\n\n        /**\n         * Change date to next month\n         * @method\n         * @event nav_next\n         */\n        next() {\n            this.selected_month_key++\n            if(this.selected_month_key > (this.months.length - 1)) {\n                this.selected_month_key = 0\n                this.selected_year++\n            }\n            console.log(this.selected_month_key, this.months[this.selected_month_key])\n            this.selected_month = this.monthsNames[this.months[this.selected_month_key]-1]\n            this.selected_day = null\n            if(this.months[this.selected_month_key] == this.today.getMonth() && this.selected_year == this.today.getFullYear()) {\n                this.selected_day = this.today.getDate()\n            }\n\n            /**\n             * Event triggered when click in NEXT button\n             * \n             * @property {active_date} Date Current selected date\n             */\n            this.$emit(\'nav_next\', this.active_date)\n        },\n\n        /**\n         * Change date to previous month\n         * @method\n         * @event nav_prev\n         */\n        prev() {\n            this.selected_month_key--\n            if(this.selected_month_key < 0) {\n                this.selected_month_key = (this.months.length - 1)\n                this.selected_year--\n            }\n            this.selected_month = this.monthsNames[this.months[this.selected_month_key]]\n            this.selected_day = null\n            if(this.months[this.selected_month_key] == this.today.getMonth() && this.selected_year == this.today.getFullYear()) {\n                this.selected_day = this.today.getDate()\n            }\n\n            /**\n             * Event triggered when click in PREVIOUS button\n             * \n             * @property {active_date} Date Current selected date\n             */\n            this.$emit(\'nav_prev\', this.active_date)\n        },\n\n        /**\n         * Update calendar interface after change the date\n         */\n        update() {\n            this.lastMonth = new Date(this.selected_year, this.months[this.selected_month_key], 0);\n            this.startDate = new Date(this.selected_year, this.months[this.selected_month_key], 1);\n            this.endDate = new Date(this.selected_year, this.months[this.selected_month_key] + 1, 0);\n            this.initialDay = this.startDate.getDay()\n            this.finalDay = this.endDate.getDay()\n            this.days = this.endDate.getDate()\n            this.today = new Date\n        }\n    }\n}\n<\/script>\n<style lang="stylus" scoped>\n#calendar-dates\n    max-width 500px\n    display block\n    margin auto auto 50px auto\n    position relative\n    font-family Arial, Verdana, \'sans-serif\'\n    &.loading \n        .calendar-body:before\n            content \'\'\n            position absolute\n            left 0\n            top 0\n            width 100%\n            height 100%\n            border-radius inherit\n            background-color rgba(255,255,255,0.5)\n            background-repeat no-repeat\n            background-position center\n            background-size 80px\n            z-index 10\n    .calendar-header\n        display flex\n        align-items center\n        width 100%\n        .nav \n            display flex\n            align-items center\n            justify-content space-between\n            margin-left auto\n            width 100px\n            .next, .prev\n                cursor pointer\n            svg\n                transform scale(0.4)\n                position relative\n                path\n                    fill #99c93c\n            .prev\n                svg\n                    left -2px\n            .next\n                svg\n                    right -2px\n            > div\n                border-radius 30px\n                background #fff\n                color #000\n                font-weight:bold\n                display flex\n                align-items center\n                justify-content center\n                width 30px\n                height 30px\n                border 2px solid #99c93c\n        > div\n            position relative\n            ul\n                position absolute\n                top 105%\n                left 0\n                z-index 9\n                list-style none\n                margin 0\n                background #fff\n                width 100%\n                box-shadow 0 0 5px rgba(0,0,0,0.1)\n                border-radius 4px\n                padding 0\n                li\n                    cursor pointer\n                    padding 10px 15px\n                    text-align center\n                    margin 0\n                    &:hover\n                        background #dfdfdf\n        > div:not(.active) \n            ul\n                display none\n        .ano-selected\n            padding 5px 15px\n            border-radius 30px\n            border 2px solid #99c93c\n            background #fff\n            cursor pointer\n        .month\n            margin-left 30px\n        .month-selected\n            padding 5px 15px\n            border-radius 30px\n            border 2px solid #fff\n            background #99c93c\n            min-width 200px\n            color #fff\n            display inline-block\n            text-align center\n            cursor pointer\n    .calendar-body\n        position relative\n        padding 15px\n        background #fff\n        box-shadow 0 0 10px rgba(0,0,0,0.1)\n        margin-top 30px\n        .days-weekdays\n            display flex\n            strong\n                display flex\n                width calc(100% / 7)\n                align-items center\n                justify-content center\n        .days-month\n            display flex\n            flex-wrap wrap\n        .dia\n            width calc(100% / 7)\n            height 50px\n            display flex\n            align-items center\n            justify-content center\n            margin 5px 0\n            &.event \n                span\n                    background #ddd\n            &.disabled\n                color #aaa\n            span\n                width 50px\n                height 50px\n                border-radius 50px\n                display flex\n                align-items center\n                justify-content center\n                position relative\n                cursor pointer\n            &.selected \n                span\n                    background #99c93c\n                    color #fff\n            &.today \n                span\n                    border:1px solid orangered\n@media all and (max-width 800px)\n    .calendar-header \n        .month-selected\n            min-width 150px\n    .calendar-body \n        .dia\n            height 40px\n            span\n                width 40px\n                height 40px\n</style>',"#calendar-dates {\n  max-width: 500px;\n  display: block;\n  margin: auto auto 50px auto;\n  position: relative;\n  font-family: Arial, Verdana, 'sans-serif';\n}\n#calendar-dates.loading .calendar-body:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n  background-color: rgba(255,255,255,0.5);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 80px;\n  z-index: 10;\n}\n#calendar-dates .calendar-header {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n#calendar-dates .calendar-header .nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: auto;\n  width: 100px;\n}\n#calendar-dates .calendar-header .nav .next,\n#calendar-dates .calendar-header .nav .prev {\n  cursor: pointer;\n}\n#calendar-dates .calendar-header .nav svg {\n  transform: scale(0.4);\n  position: relative;\n}\n#calendar-dates .calendar-header .nav svg path {\n  fill: #99c93c;\n}\n#calendar-dates .calendar-header .nav .prev svg {\n  left: -2px;\n}\n#calendar-dates .calendar-header .nav .next svg {\n  right: -2px;\n}\n#calendar-dates .calendar-header .nav > div {\n  border-radius: 30px;\n  background: #fff;\n  color: #000;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #99c93c;\n}\n#calendar-dates .calendar-header > div {\n  position: relative;\n}\n#calendar-dates .calendar-header > div ul {\n  position: absolute;\n  top: 105%;\n  left: 0;\n  z-index: 9;\n  list-style: none;\n  margin: 0;\n  background: #fff;\n  width: 100%;\n  box-shadow: 0 0 5px rgba(0,0,0,0.1);\n  border-radius: 4px;\n  padding: 0;\n}\n#calendar-dates .calendar-header > div ul li {\n  cursor: pointer;\n  padding: 10px 15px;\n  text-align: center;\n  margin: 0;\n}\n#calendar-dates .calendar-header > div ul li:hover {\n  background: #dfdfdf;\n}\n#calendar-dates .calendar-header > div:not(.active) ul {\n  display: none;\n}\n#calendar-dates .calendar-header .ano-selected {\n  padding: 5px 15px;\n  border-radius: 30px;\n  border: 2px solid #99c93c;\n  background: #fff;\n  cursor: pointer;\n}\n#calendar-dates .calendar-header .month {\n  margin-left: 30px;\n}\n#calendar-dates .calendar-header .month-selected {\n  padding: 5px 15px;\n  border-radius: 30px;\n  border: 2px solid #fff;\n  background: #99c93c;\n  min-width: 200px;\n  color: #fff;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n}\n#calendar-dates .calendar-body {\n  position: relative;\n  padding: 15px;\n  background: #fff;\n  box-shadow: 0 0 10px rgba(0,0,0,0.1);\n  margin-top: 30px;\n}\n#calendar-dates .calendar-body .days-weekdays {\n  display: flex;\n}\n#calendar-dates .calendar-body .days-weekdays strong {\n  display: flex;\n  width: calc(100% / 7);\n  align-items: center;\n  justify-content: center;\n}\n#calendar-dates .calendar-body .days-month {\n  display: flex;\n  flex-wrap: wrap;\n}\n#calendar-dates .calendar-body .dia {\n  width: calc(100% / 7);\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 5px 0;\n}\n#calendar-dates .calendar-body .dia.event span {\n  background: #ddd;\n}\n#calendar-dates .calendar-body .dia.disabled {\n  color: #aaa;\n}\n#calendar-dates .calendar-body .dia span {\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n}\n#calendar-dates .calendar-body .dia.selected span {\n  background: #99c93c;\n  color: #fff;\n}\n#calendar-dates .calendar-body .dia.today span {\n  border: 1px solid #ff4500;\n}\n@media all and (max-width: 800px) {\n  .calendar-header .month-selected {\n    min-width: 150px;\n  }\n  .calendar-body .dia {\n    height: 40px;\n  }\n  .calendar-body .dia span {\n    width: 40px;\n    height: 40px;\n  }\n}\n"]},media:void 0})}),i,"data-v-1e43e1e6",false,undefined,!1,d,void 0,void 0);function o(e){o.installed||(o.installed=!0,e.component("Vuedar",l))}var c={install:o},A=null;"undefined"!=typeof window?A=window.Vue:"undefined"!=typeof global&&(A=global.Vue),A&&A.use(c);export default l;export{o as install};
