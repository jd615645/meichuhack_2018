
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import BootstrapVue from 'bootstrap-vue'
require('./bootstrap');

window.Vue = require('vue');

Vue.use(BootstrapVue);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('dash-board', require('./components/DashBoard.vue'));
Vue.component('order-list', require('./components/OrderList.vue'));
Vue.component('order-item', require('./components/OrderItem.vue'));


const app = new Vue({
    el: '#app'
});
