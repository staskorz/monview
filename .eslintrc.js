module.exports = {
	root: true,

	env: {
		es6: true,
	},

	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
	},

	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx'],
			},
		},
	},
}
