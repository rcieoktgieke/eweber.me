import React from 'react'
import ReactDOM from 'react-dom'
import Bundle from 'Bundle/index.jsx'
import PageTemplate from 'PageTemplate/index.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import siteConfig from 'siteConfig.js'

class Site extends React.Component {
	render () {
		var pages = siteConfig.pages
		pages[this.props.page].path = '/'
		return (
			<div>
				<Route
					exact path={pages.index.path}
					component={() => (
						<PageTemplate>
							<div><Link to={pages.home.path}>Helloooooo</Link></div>
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

var page = document.getElementById('app').getAttribute('page')
ReactDOM.render(
	<BrowserRouter>
		<Site page={page} />
	</BrowserRouter>,
	document.getElementById('app')
)
