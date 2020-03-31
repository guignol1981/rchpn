<template>
	<div>
		<widget-batt-compact
			:projet="project"
			v-if="niveauWidget === NiveauxWidget.Compact"
		>
		</widget-batt-compact>
		<widget-batt-icon
			:projet="project"
			v-if="niveauWidget === NiveauxWidget.Icon"
		>
		</widget-batt-icon>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { RchpnProjet } from '../../../store/modules/service-finance/service-finance.models';
	import { Prop, Emit } from 'vue-property-decorator';
	import { NiveauxWidget } from '../../../lib/niveaux-widget';
	import WidgetBattCompact from './widget-batt-compact.vue';
	import WidgetBattIcon from './widget-batt-icon.vue';

	@Component({
		components: {
			WidgetBattCompact,
			WidgetBattIcon
		}
	})
	export default class WidgetBatt extends Vue {
		@Prop({ required: true })
		public projet!: RchpnProjet;

		@Prop({ default: NiveauxWidget.Compact })
		public niveauWidget!: NiveauxWidget;

		public NiveauxWidget = NiveauxWidget;
	}
</script>
