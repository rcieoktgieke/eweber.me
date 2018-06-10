import React from 'react'
import FadingLink from 'FadingLink/index.jsx'
import siteConfig from 'siteConfig.js'

export default class Portfolio extends React.Component {
	render () {
		return (
			<div>
				<h1>Eric's Portfolio</h1>
				<FadingLink link={siteConfig.pages.home.path}>Back to home</FadingLink>
				<h2>Here's some things Eric did!</h2>
				<ul>
					<li>Ate breakfast!</li>
					<li>Did some work!</li>
					<li>Squashed a bug!</li>
					<li>Rode a train!</li>
				</ul>
				<p>Wow! That was some cool stuff!</p>
			</div>
		)
	}
}
