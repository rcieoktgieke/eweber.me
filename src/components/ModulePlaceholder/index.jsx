import React from 'react'

class ModulePlaceholder extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		if (this.props.module.loaded === false) {
			return (
				<div>
					<h1>Waiting for module to load</h1>
				</div>
			)
		} else {
			const Component = this.props.module.component
			return (
				<Component />
			)
		}
	}
}

export default ModulePlaceholder
