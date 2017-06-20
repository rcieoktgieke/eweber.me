import React from 'react'
import IkarusGallery from '../components/IkarusGallery'
var galleries = require('../ikarus_galleries.json')

export default class Ikarus extends React.Component {
  render () {
    const firstGallery = galleries[0]
    return (
      <div>
        <IkarusGallery gallery={firstGallery} />
        <div className='galleryOverlayDiv'>
          <div className='galleryOverlayImageDiv' />
          <div className='dragscroll overlayThumbDiv' />
        </div>
      </div>
    )
  }
}
