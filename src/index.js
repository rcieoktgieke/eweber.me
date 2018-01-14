import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import Home from './scenes/Home/index.js'
import PageTemplate from './components/PageTemplate/index.js'
// import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <PageTemplate>
    <Home />
  </PageTemplate>,
  document.getElementById('root')
)
// registerServiceWorker()
