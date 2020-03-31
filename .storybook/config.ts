import { configure, addDecorator } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import Vue from 'vue';
import Vuex from 'vuex';
import vuetify from '../src/plugins/vuetify';

Vue.use(Vuex);

addDecorator(withKnobs as any);
addDecorator(() => ({
	vuetify,
	template: `
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
    <v-app>
        <v-content>
            <story/>
        </v-content>
    </v-app>
    </div>
  `
}));

function loadStories() {
	const req = require.context('../src', true, /.stories.ts$/);
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
