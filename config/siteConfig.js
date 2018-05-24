const siteConfig = {
	siteTitle: 'eweber.me',
	menu: [
		{
			id: 0,
			name: 'HOME',
			link: '/home'
		},
		{
			id: 1,
			name: 'IKARUS',
			link: '/ikarus'
		},
		{
			id: 2,
			name: 'PORTFOLIO',
			link: '/portfolio'
		},
		{
			id: 3,
			name: 'RESUM\u00c9',
			link: '/resume'
		}
	],
	pages: {
		index: {
			name: 'index',
			path: '/',
			htmlPath: '',
			depth: 0
		},
		home: {
			name: 'home',
			path: '/home',
			htmlPath: 'home/',
			depth: 1
		}
	}
}

module.exports = siteConfig
