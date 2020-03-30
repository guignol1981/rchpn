/* eslint-disable @typescript-eslint/indent */
import { Component } from 'vue';
import WidgetBatt from './widget-batt.vue';
import { select } from '@storybook/addon-knobs';

export default {
	title: `widgets/batt`
};

export const Default: () => Component = (): Component => ({
	components: { WidgetBatt },
	props: {
		niveau: {
			default: select('niveau', [1, 2, 3], 1)
		}
	},
	data: () => ({
		projet: {
			codeFinancierProjet: '1',
			identifiantArbre: 'id-arbre',
			nomProjet: 'Projet A'
		}
	}),
	template: `<widget-batt :projet="projet" :niveau="niveau"></widget-batt>`
});
