import React from 'react'
import styles from './styles.js'

class FadingLink extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hovered: false
    }
  }
  onMouseOver () {
    this.setState({hovered: true})
  }
  onMouseOut () {
    this.setState({hovered: false})
  }
  onMouseDown () {
    this.setState({clicked: true})
  }
  onMouseUp () {
    this.setState({clicked: false})
  }
  render () {
    return (
      <a
        style={styles.a(this.state)}
        href={this.props.link}
        onMouseOver={() => this.onMouseOver()}
        onMouseOut={() => this.onMouseOut()}
        onMouseDown={() => this.onMouseDown()}
        onMouseUp={() => this.onMouseUp()}
      >
        {this.props.children}
      </a>
    )
  }
}

export default FadingLink
