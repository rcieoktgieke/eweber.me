import React from 'react'
import './style.css'

class IkarusGalleryImage extends React.Component {
  render () {
    const imageSrc = this.props.path + this.props.image['filename']
    return (
      <div className='galleryThumbDiv' style={{
        // Each image in the gallery is given a bottom and right margin equal to the image margins specified in the gallery object.
        // The last image in each row is given no right margin. This is in accordance with the gallery div having no margins around it.
        marginRight: this.props.lastImage ? 0 : this.props.imageMargins,
        // The last row of images in the gallery are given no bottom margin. This is in accordance with the gallery div having no margins around it.
        marginBottom: this.props.lastRow ? 0 : this.props.imageMargins
      }}>
        <img src={imageSrc} />
      </div>
    )
  }
}

IkarusGalleryImage.propTypes = {
  path: React.PropTypes.string,
  image: React.PropTypes.object
}

export default IkarusGalleryImage
