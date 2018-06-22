import React from 'react'
import { Route, Link } from 'react-router-dom'
import ModulePlaceholder from 'ModulePlaceholder/index.jsx'
import PageTemplate from 'PageTemplate/index.jsx'
import siteConfig from 'siteConfig.js'

export default class Site extends React.Component {
	constructor (props) {
		super(props)
		var modules = {}
		Object.entries(siteConfig.pages).forEach(([pageKey, page]) => {
			modules[pageKey] = this.initModule(pageKey, page.sourcePath)
		})
		this.state = {
			modules: modules
		}
	}
	initModule (moduleName, filename) {
		return {
			filename: filename,
			loading: false,
			loaded: false,
			load: () => { this.loadModule(this.state.modules[moduleName]) },
			component: null
		}
	}
	loadModule (module) {
		if (module.loaded === false && module.loading === false) {
			module.loading = true
			this.setState({
				modules: this.state.modules
			})
			// path string literals must be included for webpack processing
			import('../../' + module.filename + '.jsx').then(mod => {
				module.component = mod.default
				module.loaded = true
				module.loading = false
				this.setState({
					module: this.state.modules
				})
			})
		}
		return () => { return module }
	}
	render () {
		var pages = siteConfig.pages
		return (
			<div>
				<Route
					exact path={pages.home.path}
					component={() => (
						<PageTemplate>
							<ModulePlaceholder
								module={ this.state.modules.home }
							/>
						</PageTemplate>
					)}
				/>
				<Route
					path={pages.portfolio.path}
					component={() => (
						<PageTemplate>
							<ModulePlaceholder
								module={ this.state.modules.portfolio }
							/>
						</PageTemplate>
					)}
				/>
			</div>
		)
	}
}
