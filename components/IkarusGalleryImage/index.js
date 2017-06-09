import React from 'react'

class IkarusGalleryImage extends React.Component {
  render () {
    const imageSrc = this.props.path + this.props.image['filename']
    return (
      <div className='galleryThumbDiv'>
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
