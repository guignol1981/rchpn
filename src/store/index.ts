import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import serviceFinanceModule from './modules/service-finance.module';
import { ServiceFinanceMock } from './modules/service-finance.service-mock';
import { ServiceFinanceHttp } from './modules/service-finance.service';

Vue.use(Vuex);

export class AppState {}

export default function StoreFactory(): Store<AppState> {
	return new Vuex.Store<AppState>({
		state: new AppState(),
		modules: {
			serviceFinance: serviceFinanceModule(
				process.env.APP_VUE_MOCK
					? new ServiceFinanceMock()
					: new ServiceFinanceHttp(
							Vue.prototype.$http,
							'http://localhost:3000'
					  )
			)
		}
	});
}
