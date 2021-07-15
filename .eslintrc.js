module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['next', 'plugin:react/recommended', 'xo', 'xo-typescript', 'xo-react'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/triple-slash-reference': 0,
		'react/function-component-definition': 0,
		'react/jsx-tag-spacing': 0,
		'new-cap': 0,
	},
	ignorePatterns: ['**/*.js'],
};
