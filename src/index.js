import React from 'react'
import ReactDOM from 'react-dom'
import Home from './scenes/Home/index.js'
import PageTemplate from './components/PageTemplate/index.js'

ReactDOM.render(
  <PageTemplate>
    <Home />
  </PageTemplate>,
  document.getElementById('root')
)
