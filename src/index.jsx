import React from 'react'
import ReactDOM from 'react-dom'
import Bundle from 'Bundle/index.jsx'
import PageTemplate from 'PageTemplate/index.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Site extends React.Component {
  render () {
    return (
      <div>
        <Route
          exact path='/'
          component={() => (
            <PageTemplate>
              <div><Link to='/home'>Helloooooo</Link></div>
            </PageTemplate>
          )}
        />
        <Route
          path='/home'
          component={() => (
            <PageTemplate>
              <Bundle load={import('Home/index.jsx')} />
            </PageTemplate>
          )}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Site />
  </BrowserRouter>,
  document.getElementById('app')
)
