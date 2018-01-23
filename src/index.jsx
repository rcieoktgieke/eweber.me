import React from 'react'
import ReactDOM from 'react-dom'
import Home from 'Home/index.js'
import PageTemplate from 'PageTemplate/index.js'
import { Router, Route, Switch } from 'react-router'

ReactDOM.render(
  <PageTemplate>
    <Home />
  </PageTemplate>,
  document.getElementById('app')
)
