import React from 'react'
import ReactDOM from 'react-dom'
import Bundle from 'Bundle/index.jsx'
import PageTemplate from 'PageTemplate/index.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import siteConfig from 'siteConfig.js'

class Site extends React.Component {
	render () {
		var paths = {}
		for (var pageIdx = 0; pageIdx < siteConfig.pages.length; pageIdx ++) {
			var page = siteConfig.pages[pageIdx]
			if (page.path != '') {
				paths[page.name] = '/' + page.name
			}
		}
		paths[this.props.page] = '/'
		return (
			<div>
				<Route
					exact path={paths.index}
					component={() => (
						<PageTemplate>
							<div><Link to={paths.home}>Helloooooo</Link></div>
						</PageTemplate>
					)}
				/>
				<Route
					path={paths.home}
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
