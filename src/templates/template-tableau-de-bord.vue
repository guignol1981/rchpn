<template>
	<div class="tableau-de-bord">
		<div class="tableau-de-bord__entete">
			<slot name="entete">
				entete
			</slot>
		</div>
		<div class="tableau-de-bord__corps">
			<slot name="corps">
				corps
			</slot>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class TemplateTableauDeBord extends Vue {}
</script>

<style lang="scss" scoped>
	.tableau-de-bord {
		height: 100vh;
		background-color: violet;

		&__entete {
			height: 5rem;
			background-color: violet;
		}

		&__corps {
			height: 100%;
			background-color: greenyellow;
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>
