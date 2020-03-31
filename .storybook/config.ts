import { configure, addDecorator } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

import vuetify from '../src/plugins/vuetify';

addDecorator(withKnobs as any);
addDecorator(() => ({
	vuetify,
	template: `
    <v-app>
        <v-content>
            <story/>
        </v-content>
    </v-app>
  `
}));

function loadStories() {
	const req = require.context('../src', true, /.stories.ts$/);
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
