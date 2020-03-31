<template>
	<v-card max-width="344" outlined class="widget-batt" raised shaped>
		<div class="widget-batt__corps">
			<v-card-title>
				...
			</v-card-title>
			<v-card-subtitle>
				Budget
			</v-card-subtitle>
			<v-icon class="widget-batt-icon">mdi-pig-variant</v-icon>
			<v-divider style="display: inline;"></v-divider>
			<v-card-text>
				<p>
					Solde / 10 000$
				</p>
			</v-card-text>
		</div>
		<v-btn fab small color="primary" class="widget-batt-action">
			<v-icon>mdi-plus</v-icon>
		</v-btn>
	</v-card>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { RchpnProjet } from '../../../store/modules/service-finance/service-finance.models';
	import { Prop } from 'vue-property-decorator';

	@Component
	export default class WidgetBatt extends Vue {
		@Prop({ required: true })
		public projet!: RchpnProjet;

		@Prop({ default: 1 })
		public niveau!: number;
	}
</script>

<style lang="scss" scoped>
	@import '../../../styles/commun';

	.widget-batt {
		height: 300px;
		width: 300px;
		margin: $rchpn-espace--l;
		position: relative;

		&__corps {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		&-icon {
			font-size: 9rem;
		}

		&-action {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%) translateY(50%);
		}
	}
</style>
