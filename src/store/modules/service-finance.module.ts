import { ServiceFinance } from './service-finance.service';
import { Module, ActionContext } from 'vuex';
import { ServiceFinanceState } from './service-finance.state';
import { AppState } from '..';
import {
	GETTER_PROJETS,
	ACTION_OBTENIR_PROJETS,
	MUTATION_PROJETS
} from './service-finance-definitions';
import { RchpnProjet } from './service-finance.models';

const serviceFinanceModule: (
	serviceFinance: ServiceFinance
) => Module<ServiceFinanceState, AppState> = (
	serviceFinance: ServiceFinance
) => ({
	namespaced: true,
	state: new ServiceFinanceState(),
	getters: {
		[GETTER_PROJETS]: (state: ServiceFinanceState) => {
			return state.projets;
		}
	},
	mutations: {
		[MUTATION_PROJETS]: (
			state: ServiceFinanceState,
			projets: RchpnProjet[]
		): void => {
			state.projets = projets;
		}
	},
	actions: {
		[ACTION_OBTENIR_PROJETS]: (
			context: ActionContext<ServiceFinanceState, AppState>
		) => {
			serviceFinance
				.getListe()
				.then((projets: RchpnProjet[]) =>
					context.commit(MUTATION_PROJETS, projets)
				)
				.catch(() => console.log('echec liste projets'));
		}
	}
});

export default serviceFinanceModule;
