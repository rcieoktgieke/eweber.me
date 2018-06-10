import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Site from 'Site/index.jsx'

ReactDOM.render(
	<BrowserRouter>
		<Site />
	</BrowserRouter>,
	document.getElementById('app')
)
