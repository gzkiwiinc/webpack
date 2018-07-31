const cssNextOption = process.env.BROWSER_FALLBACK
	? {
		browsers: ["> 5%", "last 8 versions"],
		features: {
			customProperties: {
				variables: {},
			},
		},
	}
	: {
		features: {
			customProperties: {
				preserve: true,
			},
		},
	};
// MARK:
// postcss-import have problem of hot-reload
// so maybe use postcss after build
module.exports = {
	plugins: [
		// require('postcss-import')(),
		require('precss'),
		require('autoprefixer'),
		require("postcss-cssnext")(),
	],
	options: {
		parser: 'sugarss',
	},
};
