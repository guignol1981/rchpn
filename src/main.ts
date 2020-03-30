import Vue from 'vue';
import App from './App.vue';
import StoreFactory from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import { routerFactory } from './router';
import { AxiosPlugin } from './plugins/axios-plugin';

Vue.config.productionTip = false;
Vue.use(AxiosPlugin);

new Vue({
	router: routerFactory(process.env.BASE_URL),
	store: StoreFactory(),
	vuetify,
	render: h => h(App)
}).$mount('#app');
