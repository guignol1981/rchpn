import { RchpnProjet } from './service-finance.models';

export const PROJET_SET_1: RchpnProjet[] = new Array(
	Math.floor(Math.random() * 50) + 1
)
	.fill(undefined)
	.map((e, i) => ({
		codeFinancierProjet: i.toString(),
		identifiantArbre: 'id-arbre',
		nomProjet: 'Projet ' + i
	}));
