import { PluginObject, VueConstructor } from 'vue';
import Axios from 'axios';

export interface AxiosPluginOptions {}

import Vue from 'vue';

// 2. Spécifiez un fichier avec les types que vous voulez augmenter
//    Vue a le type de constructeur dans types/vue.d.ts
declare module 'vue/types/vue' {
	// 3. Déclarez l'augmentation pour Vue
	interface Vue {
		$myProperty: string;
	}
}

export const AxiosPlugin: PluginObject<AxiosPluginOptions> = {
	install: (v: VueConstructor, options?: AxiosPluginOptions): void => {
		v.prototype.$http = Axios.create();
	}
};
