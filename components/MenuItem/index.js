import React from 'react'
// import { RouteHandler, Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'
import './style.scss'

class MenuItem extends React.Component {
  render () {
    return (
      <span className='menuBarItemSpan'><a className='menuBarItemA' href={this.props.link}>{this.props.name}</a>
        {this.props.last
          ? ''
          : <span className='menuBarItemSeparator'> <b>&mdash;</b> </span>}
      </span>
    )
  }
}

MenuItem.propTypes = {
  route: React.PropTypes.object
}

export default MenuItem
