<template>
	<v-card max-width="344" outlined class="widget-batt">
		<v-card-title>{{ projet.nomProjet }}</v-card-title>
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
		height: 200px;
		width: 200px;
		margin: $rchpn-espace--l;
	}
</style>
