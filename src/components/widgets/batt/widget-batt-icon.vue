<template>
	<v-card max-width="344" outlined class="widget-batt" raised shaped>
		<div class="widget-batt__corps">
			<v-card-title>
				...
			</v-card-title>
			<v-icon class="widget-batt-icon">mdi-pig-variant</v-icon>
		</div>
		<v-btn fab small color="primary" class="widget-batt-action">
			<v-icon>mdi-plus</v-icon>
		</v-btn>
	</v-card>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { Prop, Component } from 'vue-property-decorator';
	import { RchpnProjet } from '../../../store/modules/service-finance/service-finance.models';

	@Component
	export default class WidgetBattIcon extends Vue {
		@Prop({ required: true })
		public projet!: RchpnProjet;
	}
</script>

<style lang="scss" scoped>
	@import '../../../styles/commun';

	.widget-batt {
		position: relative;

		&__corps {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		&-icon {
			font-size: 4rem;
		}

		&-action {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%) translateY(50%);
		}
		@include rchpn-hauteur-widget(
			$rchpn-largeur-widget--s,
			$rchpn-largeur-widget--s
		);
	}
</style>
