/* eslint-disable @typescript-eslint/indent */
import { Component } from 'vue';
import WidgetGrille from './widget-grille.vue';

export default {
	title: `communs/widget-grille`
};

export const Default: () => Component = (): Component => ({
	components: { WidgetGrille },
	template: `<widget-grille>
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
	</widget-grille>`
});
