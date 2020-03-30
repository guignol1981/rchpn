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
	import {
		GETTER_BIDON,
		ACTION_TESTER_BIDON
	} from '../store/modules/service-finance-definitions';
	import { NomsRoutes } from '../router';
	import { namespace } from 'vuex-class';

	const serviceFinanceModule = namespace('serviceFinance');

	@Component({
		components: {
			RchpnTemplateLogin
		}
	})
	export default class PageLogin extends Vue {
		@serviceFinanceModule.Getter
		public onLoginClicked(): void {
			this.$router.push({
				name: NomsRoutes.TableaudeBord
			});
		}
	}
</script>
