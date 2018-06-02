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
					path={pages.home.path}
					component={() => (
						<PageTemplate>
							<Bundle load={import('Home/index.jsx')} />
						</PageTemplate>
					)}
				/>
				<Route
					path={pages.portfolio.path}
					component={() => (
						<PageTemplate>
							<Bundle load={import('Portfolio/index.jsx')} />
						</PageTemplate>
					)}
				/>
			</div>
		)
	}
}
