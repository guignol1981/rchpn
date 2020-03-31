import Vue from 'vue';
import Vuetify, { VCard, VApp, VContent, VCardTitle } from 'vuetify/lib';

Vue.use(Vuetify, {
	components: {
		VApp,
		VContent,
		VCard,
		VCardTitle
	}
});

export default new Vuetify({});
