import React from 'react'
import { config } from 'config'
import MenuBar from '../components/MenuBar'
import 'css/site.scss'

class Template extends React.Component {
  render () {
    return (
      <div className='centerContentDiv'>
        <h1>eric weber</h1>
        <MenuBar config={config} {...this.props} />
        {this.props.children}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any
}

export default Template
