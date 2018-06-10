import React from 'react'

class Bundle extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			mod: null
		}
	}

	componentWillMount () {
		this.load(this.props.load)
	}

	load (load) {
		this.setState({
			mod: null
		})

		load.then(mod => {
			const Mod = mod.default
			this.setState({
				mod: <Mod />
			})
		})
	}

	render () {
		return this.state.mod
	}
}

export default Bundle
