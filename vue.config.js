module.exports = {
	transpileDependencies: ['vuetify'],
	configureWebpack: {
		devtool: 'source-map'
	},
	pluginOptions: {
		storybook: {
			allowedPlugins: ['VuetifyLoaderPlugin']
		}
	}
};
