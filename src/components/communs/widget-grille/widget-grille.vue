<template>
	<ul class="widget-grille">
		<slot name="widgets"></slot>
	</ul>
</template>

<script lang="ts">
	import Vue from 'vue';
	import WidgetBattCompact from '../../widgets/batt/widget-batt-compact.vue';
	import Component from 'vue-class-component';
	import WidgetBattIcon from '../../widgets/batt/widget-batt-icon.vue';

	@Component({
		components: {
			WidgetBattCompact,
			WidgetBattIcon
		}
	})
	export default class WidgetGrille extends Vue {}
</script>

<style lang="scss" scoped>
	@import '../../../styles/commun';
	.widget-grille {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
		grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));
		grid-gap: 2px;
		grid-auto-flow: dense;
		list-style: none;
		margin: 1em auto;
		padding: 0;
		max-width: 800px;
		align-items: center;
		justify-items: center;

		// .wrapper li {
		// 	border: 1px solid #ccc;
		// }

		.compact {
			height: 100px;
			width: 200px;
			background-color: blue;
			grid-column-end: span 4;
			grid-row-end: span 2;
		}

		.icon {
			height: 50px;
			width: 50px;
			background-color: red;
			grid-column-end: span 1;
			grid-row-end: span 1;
		}
	}
</style>
