<template>
	<div class="tableau-de-bord">
		<div class="tableau-de-bord__entete">
			<slot name="entete">
				entete
			</slot>
		</div>
		<div class="tableau-de-bord__corps">
			<slot>
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
	@import '../styles/commun';

	.tableau-de-bord {
		height: 100%;
		display: flex;
		flex-direction: column;

		&__entete {
			flex-shrink: 0;
			min-height: 80px;
			background-color: #1f1f1f;
			color: #FFF;
			padding: $rchpn-espacement--l $rchpn-espacement;
			border-bottom: 1px solid #d7d7d7;
		}

		&__corps {
			flex: 1 1 auto;
			background-color: #f4f4f4;
			padding: $rchpn-espacement--l $rchpn-espacement $rchpn-espacement--l * 2 ;

			@include rchpn-grille-widgets();
		}

		&__entete,
		&__corps {
			@media (min-width: 768px) {
				padding-left: $rchpn-espacement--l;
				padding-right: $rchpn-espacement--l;
			}
		}
	}
</style>
