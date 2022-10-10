import React from 'react'
import CardThumbnail from '../../components/card-thumbnail'
import bufferString from '../../helpers/bufferString'

export default function ThumbnailsWrapper({ images, activeIndex, onclick }) {
      const resolvedImages = bufferString(images)
      console.log(resolvedImages)
      return (
            <React.Fragment>
                  {resolvedImages?.map((image, index)=> <CardThumbnail key={image} src={`/upload/${image}`} active={index+1 === activeIndex} onclick={()=>onclick(image, index+1)} index={index+1} />)}
            </React.Fragment>
      )
}