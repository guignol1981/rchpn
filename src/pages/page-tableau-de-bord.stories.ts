import { VueConstructor } from 'vue';
import Vue from 'vue';
import Vuex from 'vuex';
import serviceFinanceModule from '../store/modules/service-finance/service-finance.module';
import { ServiceFinanceMock } from '../store/modules/service-finance/service-finance.service-mock';
import PageTableauDeBord from './page-tableau-de-bord.vue';

export default {
	title: `pages/tableau-de-bord`
};

export const Default: () => VueConstructor = (): VueConstructor => {
	return Vue.extend({
		store: new Vuex.Store({
			modules: {
				serviceFinance: serviceFinanceModule(new ServiceFinanceMock())
			}
		}),
		components: { PageTableauDeBord },
		template: `<page-tableau-de-bord></page-tableau-de-bord>`
	});
};
