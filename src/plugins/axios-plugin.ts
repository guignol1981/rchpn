import { PluginObject, VueConstructor } from 'vue/types/umd';
import Axios from 'axios';

export interface AxiosPluginOptions {}

export const AxiosPlugin: PluginObject<AxiosPluginOptions> = {
	install: (v: VueConstructor, options?: AxiosPluginOptions): void => {
		v.prototype.$http = Axios.create();
	}
};
