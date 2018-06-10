import React from 'react'
import FadingLink from 'FadingLink/index.jsx'
import styles from './styles.js'

class MenuItem extends React.Component {
	render () {
		return (
			<span style={styles.menuBarItemSpan}>
				<FadingLink link={(this.props.link)}>
					{this.props.name}
				</FadingLink>
				{this.props.last
					? ''
					: <span style={styles.menuBarItemSeparator}> <b>&mdash;</b> </span>}
			</span>
		)
	}
}

export default MenuItem
