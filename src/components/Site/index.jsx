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
			modules: modules,
			modulesLoading: false
		}
	}
	initModule (moduleName, filename) {
		return {
			filename: filename,
			loading: false,
			loaded: false,
			load: (callback=function () { return }) => {
				this.loadModule(this.state.modules[moduleName], callback)
			},
			component: null
		}
	}
	loadModule (module, callback) {
		// only begin loading module once
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
				callback()
			})
		}
	}
	beginLoading (moduleName) {
		const module = this.state.modules[moduleName]
		if (this.state.modulesLoading === false) {
			module.load(() => {
				// on load complete callback of inital module, preload other modules
				Object.entries(this.state.modules).forEach(([name, preloadModule]) => {
					preloadModule.load()
				})
			})
			this.setState({
				modulesLoading: true
			})
		}
		return module
	}
	render () {
		const pages = siteConfig.pages
		return (
			<div>
				<Route
					exact path={pages.home.path}
					component={() => (
						<PageTemplate>
							<ModulePlaceholder
								module={ this.beginLoading('home') }
							/>
						</PageTemplate>
					)}
				/>
				<Route
					path={pages.portfolio.path}
					component={() => (
						<PageTemplate>
							<ModulePlaceholder
								module={ this.beginLoading('portfolio') }
							/>
						</PageTemplate>
					)}
				/>
			</div>
		)
	}
}
