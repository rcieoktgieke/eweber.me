import React from 'react'
import MenuItem from './components/MenuItem/index.js'

class MenuBar extends React.Component {
  render () {
    const menuBar = this.props.config.menu.map((menuItem, index) =>
      index === this.props.config.menu.length - 1
        ? <MenuItem key={menuItem.id} name={menuItem.name} link={menuItem.link} last='true' />
        : <MenuItem key={menuItem.id} name={menuItem.name} link={menuItem.link} />
    )
    return (
      <div>{menuBar}</div>
    )
  }
}

export default MenuBar
