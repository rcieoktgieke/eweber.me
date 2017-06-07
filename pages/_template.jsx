import React from 'react'
import { config } from 'config'
import MenuBar from '../components/MenuBar'
import 'css/site.scss'

class Template extends React.Component {
  render () {
    return (
      <div className='contentWrapperDiv'>
        <h1>eric weber</h1>
        <MenuBar config={config} {...this.props} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            paddingTop: 0,
            height: `100%`
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any
}

export default Template
