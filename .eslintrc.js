module.exports = {
	root: true,

	env: {
		es6: true,
		node: true,
	},

	parserOptions: {
		ecmaVersion: 2017,
	},

	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],

	rules: {
		'import/no-unresolved': [2, { commonjs: true, amd: true }],
	},
}
