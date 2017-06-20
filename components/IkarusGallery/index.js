import React from 'react'
import IkarusGalleryRow from '../IkarusGalleryRow'

class IkarusGallery extends React.Component {
  render () {
    const galleryItems = this.props.gallery['image_matrix'].map((galleryRow, row) =>
      <IkarusGalleryRow key={row} rowData={galleryRow} lastRow={row === this.props.gallery['image_matrix'].length} imagesPath={this.props.gallery['images_path']} thumbsFolderPath={this.props.gallery['thumbs_folder_path']} imageMargins={this.props.gallery['image_margins']} />
    )
    return (
      <div className='gallery' style={{
        width: this.props.gallery['total_width']
      }}>
        {galleryItems}
      </div>
    )
  }
}

IkarusGallery.propTypes = {
  gallery: React.PropTypes.object
}

export default IkarusGallery
