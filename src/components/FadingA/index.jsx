import React from 'react'
import FadingEl from 'FadingEl/index.jsx'

class FadingA extends React.Component {
	render () {
		return (
			<FadingEl>
				<a
					style={{all: 'inherit'}}
					href={this.props.link}
				>
					{this.props.children}
				</a>
			</FadingEl>
		)
	}
}

export default FadingA
