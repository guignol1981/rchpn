import { configure, addDecorator } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { VApp } from 'vuetify/lib';

import vuetify from '../src/plugins/vuetify';

addDecorator(withKnobs as any);
addDecorator(() => ({
	vuetify,
	components: { VApp },
	template: `
    <v-app>
      <div>
          <story/>
      </div>
    </v-app>
  `
}));
