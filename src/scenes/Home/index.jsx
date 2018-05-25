import React from 'react'
import { Link } from 'react-router-dom'
import FadingLink from 'FadingLink/index.jsx'
import siteConfig from 'siteConfig.js'

export default class Index extends React.Component {
	render () {
		return (
			<div>
				<h2>About Eric</h2>
				<p>Hi there!</p>
				<h2>Contact Eric</h2>
				<Link to={siteConfig.pages.index.path}>Back to home</Link>
				<p>
					Send me an email at <FadingLink link='mailto:contact@eweber.me'>contact@eweber.me</FadingLink> or give me a call at (925) 518-2633
				</p>
				<h2>LinkedIn</h2>
				<p>
					Connect with me on <FadingLink link='https://www.linkedin.com/in/eric-weber-b0b868a1/' target='blank'>LinkedIn</FadingLink>
				</p>
			</div>
		)
	}
}
