import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.scss'

class MenuItem extends React.Component {
  render () {
    return (
      <span className='menuBarItemSpan'><Link className='menuBarItemLink' to={prefixLink(this.props.link)}>{this.props.name}</Link>
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
