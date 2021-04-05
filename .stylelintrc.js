module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-prettier',
		'stylelint-config-sass-guidelines',
	],
	rules: {
		indentation: 'tab',
		'max-nesting-depth': [
			2,
			{
				ignore: ['pseudo-classes'],
			},
		],
		'selector-class-pattern': null,
		'selector-no-qualifying-type': [
			true,
			{
				ignore: ['attribute', 'class'],
			},
		],
		'scss/at-extend-no-missing-placeholder': null,
		'scss/at-import-partial-extension-whitelist': ['scss'],
		'scss/dollar-variable-pattern': null,
	},
};
