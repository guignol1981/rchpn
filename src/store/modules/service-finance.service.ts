import Axios, { AxiosInstance } from 'axios';
import { RchpnPosteBudgetaire, RchpnProjet } from './service-finance.models';
import {
	PosteBudgetaireRessource,
	PosteBudgetaireRessourceImpl
} from '@ul/batt-client/dist/main/webapp/sir-services-finance-api-ts/services/ressourcepostebudgetaire';
import {
	ProjetRessourceImpl,
	ProjetRessource
} from '@ul/batt-client/dist/main/webapp/sir-services-finance-api-ts/services/ressourceprojet';

export interface ServiceFinance {
	getListeParCodeProjet(
		codeFinancierProjet: string
	): Promise<RchpnPosteBudgetaire[]>;
	getListe(): Promise<RchpnProjet[]>;
}

export class ServiceFinanceHttp implements ServiceFinance {
	private _servicePosteBudgetaireRessource: PosteBudgetaireRessource;
	private _serviceProjetRessource: ProjetRessource;

	constructor(http: AxiosInstance, baseUrl: string) {
		this._servicePosteBudgetaireRessource = new PosteBudgetaireRessourceImpl(
			http,
			baseUrl
		);

		this._serviceProjetRessource = new ProjetRessourceImpl(http, baseUrl);
	}

	getListeParCodeProjet(
		codeFinancierProjet: string
	): Promise<RchpnPosteBudgetaire[]> {
		return this._servicePosteBudgetaireRessource.getListeParCodeProjet(
			codeFinancierProjet
		);
	}

	getListe(): Promise<RchpnProjet[]> {
		return this._serviceProjetRessource.getListe();
	}
}
