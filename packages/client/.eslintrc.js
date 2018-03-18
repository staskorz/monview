/* global module:false */

module.exports = {
	env: {
		browser: true,
		node: false,
	},

	parserOptions: {
		sourceType: 'module',
	},

	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx'],
			},
		},
	},
}
