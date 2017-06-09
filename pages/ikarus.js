import React from 'react'
import IkarusGalleryRow from '../components/IkarusGalleryRow'
var galleries = require('../ikarus_galleries.json')

export default class Ikarus extends React.Component {
  render () {
    const firstGallery = galleries[0]
    const galleryItems = firstGallery['image_matrix'].map((galleryRow, row) =>
      <IkarusGalleryRow key='row' rowData={galleryRow} imagesPath={firstGallery['images_path']} thumbsFolderPath={firstGallery['thumbs_folder_path']} />
    )
    return (
      <div>
        {galleryItems}
      </div>
    )
  }
}
