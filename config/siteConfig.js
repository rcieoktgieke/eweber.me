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
	pages: [
		{
			path: '',
			name: 'index',
			depth: 0
		},
		{
			path: 'index/',
			name: 'index',
			depth: 1
		},
		{
			path: 'home/',
			name: 'home',
			depth: 1
		}
	]
}

module.exports = siteConfig
