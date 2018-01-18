import stylesConfig from 'stylesConfig.js'
import commonStyles from 'common/commonStyles.js'

const body = {
  width: '100%',
  height: '100vh',
  position: 'absolute',
  fontFamily: 'Avenir Light, Trebuchet MS, Arial, sans-serif',
  color: stylesConfig.colors.bodyTextColor,
  background:
    stylesConfig.colors.secondary +
    ' url(' + stylesConfig.backgroundImage.file + ')',
  backgroundAttachment: 'fixed',
  backgroundSize: stylesConfig.backgroundImage.size
}

const centerContentDiv = {
  width: stylesConfig.centerWidth + 'px',
  position: 'relative',
  left: '50%',
  marginLeft: -stylesConfig.centerWidth / 2 + 'px',
  top: '25vh'
}

const styles = {
  centerContentDiv: centerContentDiv,
  body: body,
  commonStyles: commonStyles
}

export default styles
