import React from 'react'
import MenuBar from './components/MenuBar/index.js'
import styles from './styles.js'
import siteConfig from 'siteConfig.js'

class PageTemplate extends React.Component {
  render () {
    return (
      <div style={styles.body}>
        <div style={styles.centerContentDiv} >
          <h1 style={styles.commonStyles.h1}>eric weber</h1>
          <MenuBar config={siteConfig} {...this.props} />
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default PageTemplate
