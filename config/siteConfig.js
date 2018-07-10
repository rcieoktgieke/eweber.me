const siteConfig = {
	siteTitle: 'eweber.me',
	menu: [
		{
			id: 0,
			name: 'HOME',
			link: '/'
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
		home: {
			path: '/',
			sourcePath: 'scenes/Home/index',
			htmlPath: '',
			depth: 0
		},
		portfolio: {
			path: '/portfolio',
			sourcePath: 'scenes/Portfolio/index',
			htmlPath: 'portfolio/',
			depth: 1
		}
	}
}

module.exports = siteConfig
