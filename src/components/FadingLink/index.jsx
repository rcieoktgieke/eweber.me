import React from 'react'
import FadingEl from 'FadingEl/index.jsx'
import { Link } from 'react-router-dom'

class FadingLink extends React.Component {
	render () {
		return (
			<FadingEl>
				<Link
					style={{all: 'inherit'}}
					to={this.props.link}
				>
					{this.props.children}
				</Link>
			</FadingEl>
		)
	}
}

export default FadingLink
