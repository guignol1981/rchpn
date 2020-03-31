export declare class RchpnPosteBudgetaire {
	comptes?: RchpnCompte[];
	debutPeriode?: any;
	finPeriode?: any;
	nom?: string;
}

export declare class RchpnCompte {
	nom?: string;
	solde?: number;
	totalDepenses?: number;
	totalEngagements?: number;
	totalRevenus?: number;
}

export declare class RchpnProjet {
	codeFinancierProjet?: string;
	identifiantArbre?: string;
	nomProjet?: string;
}
