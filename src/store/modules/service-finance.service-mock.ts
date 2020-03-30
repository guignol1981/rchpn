import { ServiceFinance } from './service-finance.service';
import { RchpnPosteBudgetaire, RchpnProjet } from './service-finance.models';
import { PROJET_SET_1 } from './service-finance.mocks';

export class ServiceFinanceMock implements ServiceFinance {
	private projets: RchpnProjet[] = PROJET_SET_1;

	getListeParCodeProjet(
		codeFinancierProjet: string
	): Promise<RchpnPosteBudgetaire[]> {
		return Promise.resolve([]);
	}

	getListe(): Promise<RchpnProjet[]> {
		return Promise.resolve(this.projets);
	}
}
