import React from 'react'
import styles from './styles.js'

class FadingEl extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			hovered: false,
			clicked: false
		}
	}
	onMouseOver () {
		this.setState({hovered: true, clicked: false})
	}
	onMouseOut () {
		this.setState({hovered: false, clicked: false})
	}
	onMouseDown () {
		this.setState({clicked: true, hovered: false})
	}
	onMouseUp () {
		this.setState({clicked: false, hovered: false})
	}
	render () {
		return (
			<span
				style={styles.fadingEl(this.state)}
				href={this.props.link}
				target={this.props.target}
				onMouseOver={() => this.onMouseOver()}
				onMouseOut={() => this.onMouseOut()}
				onMouseDown={() => this.onMouseDown()}
				onMouseUp={() => this.onMouseUp()}
			>
				{this.props.children}
			</span>
		)
	}
}

export default FadingEl
