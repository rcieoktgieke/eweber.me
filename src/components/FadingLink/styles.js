import stylesConfig from 'stylesConfig.js'
import commonStyles from 'common/commonStyles.js'

function a (aState) {
  var styles = {
    color: stylesConfig.colors.primary[0],
    textDecoration: 'none',
    transition: 'color .7s ease'
  }
  if (aState.hovered) {
    styles.color = stylesConfig.colors.primary[1]
  }
  if (aState.clicked) {
    styles.color = stylesConfig.colors.primary[2]
    styles.transition = 'none'
  }
  return styles
}

const styles = {
  a: a,
  commonStyles: commonStyles
}

export default styles
