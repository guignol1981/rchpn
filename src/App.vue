<template>
	<v-app>
		<v-content>
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class App extends Vue {}
</script>

<style lang="scss"></style>
