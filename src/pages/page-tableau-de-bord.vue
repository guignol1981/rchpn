<template>
	<template-tableau-de-bord>
		<div slot="entete">
			ma navbar
		</div>
		<widget-grille>
			<template slot="widgets">
				<div class="compact">widget</div>
				<div class="icon">widget</div>
				<div class="icon">widget</div>
				<div class="compact">widget</div>
				<div class="icon">widget</div>
				<div class="icon">widget</div>
				<div class="icon">widget</div>
				<div class="compact">widget</div>
				<div class="compact">widget</div>
				<div class="compact">widget</div>
				<div class="icon">widget</div>
				<div class="icon">widget</div>
			</template>
		</widget-grille>
		<!-- <widget-batt
			v-for="(projet, index) in projets"
			:projet="projet"
			:key="index"
		/> -->
	</template-tableau-de-bord>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import TemplateTableauDeBord from '../templates/template-tableau-de-bord.vue';
	import WidgetBatt from '../components/widgets/batt/widget-batt.vue';
	import { namespace } from 'vuex-class';
	import { BindingHelpers } from 'vuex-class/lib/bindings';
	import {
		GETTER_PROJETS,
		ACTION_OBTENIR_PROJETS
	} from '../store/modules/service-finance/service-finance-definitions';
	import { RchpnProjet } from '../store/modules/service-finance/service-finance.models';
	import WidgetGrille from '../components/communs/widget-grille/widget-grille.vue';

	const serviceFinanceModule: BindingHelpers = namespace('serviceFinance');

	@Component({
		components: {
			TemplateTableauDeBord,
			WidgetBatt,
			WidgetGrille
		}
	})
	export default class PageTableauDeBord extends Vue {
		@serviceFinanceModule.Getter(GETTER_PROJETS)
		public projets!: RchpnProjet[];

		@serviceFinanceModule.Action(ACTION_OBTENIR_PROJETS)
		public obtenirProjets!: Function;

		protected created(): void {
			this.obtenirProjets();
		}
	}
</script>
