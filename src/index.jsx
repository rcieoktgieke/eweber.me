import React from 'react'
import ReactDOM from 'react-dom'
import Home from 'Home/index.js'
import PageTemplate from 'PageTemplate/index.js'
import { BrowserRouter, Route } from 'react-router-dom'

const homePage = () => (
  <PageTemplate>
    <Home />
  </PageTemplate>
)

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route
        exact path='/'
        component={homePage}
      />
      <Route
        path='/home'
        component={homePage}
      />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
)
