import React from 'react'
import IkarusGalleryImage from '../IkarusGalleryImage'

class IkarusGalleryRow extends React.Component {
  render () {
    const thumbsPath = '/' + this.props.imagesPath + '/' + this.props.thumbsFolderPath + '/'
    const galleryRow = this.props.rowData.map((image, col) =>
      <IkarusGalleryImage key={col} image={image} path={thumbsPath} lastRow={this.props.lastRow} lastImage={col === this.props.rowData.length - 1} imageMargins={this.props.imageMargins} />
    )
    return (
      <div className='galleryRow'>
        {galleryRow}
      </div>
    )
  }
}

IkarusGalleryRow.propTypes = {
  rowData: React.PropTypes.array,
  imagesPath: React.PropTypes.string,
  thumbsFolderPath: React.PropTypes.string
}

export default IkarusGalleryRow
