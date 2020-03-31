/* eslint-disable @typescript-eslint/indent */
import { Component } from 'vue';
import WidgetBatt from './widget-batt.vue';
import { select } from '@storybook/addon-knobs';
import { NiveauxWidget } from '../../../lib/niveaux-widget';

export default {
	title: `widgets/batt`
};

export const Default: () => Component = (): Component => ({
	components: { WidgetBatt },
	props: {
		niveau: {
			default: select(
				'niveau',
				[
					NiveauxWidget.Compact,
					NiveauxWidget.Normal,
					NiveauxWidget.Grand
				],
				NiveauxWidget.Compact
			)
		}
	},
	data: () => ({
		projet: {
			codeFinancierProjet: '1',
			identifiantArbre: 'id-arbre',
			nomProjet: 'Projet A'
		}
	}),
	template: `<widget-batt :projet="projet" :niveau-widget="niveau"></widget-batt>`
});
