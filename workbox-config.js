module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,html,css,js,txt,svg}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'build/sw.js'
};