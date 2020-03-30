<template>
	<div class="template-login">
		<slot></slot>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	export default class TemplateLogin extends Vue {}
</script>

<style lang="scss" scoped>
	.template-login {
		background-color: violet;
	}
</style>
