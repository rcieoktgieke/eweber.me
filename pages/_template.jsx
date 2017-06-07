import React from 'react'
import 'css/site.scss'

class Template extends React.Component {
  render () {
    return (
      <div className='contentWrapperDiv'>
        {this.props.children}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any
}

export default Template
