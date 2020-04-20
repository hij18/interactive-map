import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

import appStore from './store';

Vue.use(Vuex);
const store = new Vuex.Store(appStore);

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(App),
}).$mount('#app');
