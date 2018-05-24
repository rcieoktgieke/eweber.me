import React from 'react'
import { Route, Link } from 'react-router-dom'
import Bundle from 'Bundle/index.jsx'
import PageTemplate from 'PageTemplate/index.js'
import siteConfig from 'siteConfig.js'

export default class Site extends React.Component {
	render () {
		var pages = siteConfig.pages
		return (
			<div>
				<Route
					path={pages.index.path}
					component={() => (
						<PageTemplate>
							<div><Link to={pages.home.path}>Hooooome</Link></div>
						</PageTemplate>
					)}
				/>
				<Route
					path={pages.home.path}
					component={() => (
						<PageTemplate>
							<Bundle load={import('Home/index.jsx')} />
						</PageTemplate>
					)}
				/>
			</div>
		)
	}
}
