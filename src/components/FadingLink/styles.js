import stylesConfig from 'stylesConfig.js'
import commonStyles from 'commonStyles.js'

function fadingEl (state) {
  var styles = {
    color: stylesConfig.colors.primary[0],
    textDecoration: 'none',
    transition: 'color .3s ease'
  }
  if (state.hovered) {
    styles.color = stylesConfig.colors.primary[1]
  }
  if (state.clicked) {
    styles.color = stylesConfig.colors.primary[2]
    styles.transition = 'none'
  }
  return styles
}

const styles = {
  fadingEl: fadingEl,
  commonStyles: commonStyles
}

export default styles
