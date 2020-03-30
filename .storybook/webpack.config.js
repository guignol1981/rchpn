const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({ config }) => {
	config.resolve.extensions.push(
		'.ts',
		'.tsx',
		'.vue',
		'.css',
		'.less',
		'.scss',
		'.sass',
		'.html'
	);

	config.resolve.alias = {
		...config.resolve.alias,
		...{
			vue$: 'vue/dist/vue.esm.js'
		}
	};

	config.module.rules.push({
		test: /\.ts$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/],
					transpileOnly: true
				}
			}
		]
	});

	config.module.rules.push({
		test: /\.s[ac]ss$/i,
		loaders: [
			'style-loader',
			'css-loader',
			{
				loader: 'sass-loader',
				options: {
					implementation: require('sass'),
					sassOptions: {
						fiber: require('fibers')
					}
				}
			}
		]
	});
	config.module.rules.push({
		test: /\.less$/,
		loaders: ['style-loader', 'css-loader', 'less-loader']
	});
	config.module.rules.push({
		test: /\.styl$/,
		loader: 'style-loader!css-loader!stylus-loader'
	});

	config.plugins.push(new ForkTsCheckerWebpackPlugin());

	return config;
};
