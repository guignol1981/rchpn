import Vue from 'vue';
import Vuetify, {
	VCard,
	VApp,
	VContent,
	VCardTitle,
	VCardSubtitle,
	VBtn,
	VIcon,
	VCardText,
	VDivider
} from 'vuetify/lib';

Vue.use(Vuetify, {
	components: {
		VApp,
		VContent,
		VCard,
		VCardTitle,
		VCardSubtitle,
		VBtn,
		VIcon,
		VCardText,
		VDivider
	}
});

export default new Vuetify({});
