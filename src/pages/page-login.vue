<template>
	<rchpn-template-login>
		<v-btn text small color="primary" @click="onLoginClicked()"
			>Primary</v-btn
		>
	</rchpn-template-login>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import RchpnTemplateLogin from '../templates/template-login.vue';
	import { NomsRoutes } from '../router';
	import { namespace } from 'vuex-class';

	@Component({
		components: {
			RchpnTemplateLogin
		}
	})
	export default class PageLogin extends Vue {
		public onLoginClicked(): void {
			this.$router.push({
				name: NomsRoutes.TableaudeBord
			});
		}
	}
</script>
