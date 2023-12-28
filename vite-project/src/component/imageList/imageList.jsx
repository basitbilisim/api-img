import React from 'react'
import ImageItem from '../imageItem/imageItem'

const ImageList = ({imageIn}) => {  
  return (
    <div className='imageList'>
      {imageIn.data ? imageIn.data.results.map((item,id) => {
        return <ImageItem item={item} key={id}/>
      }) : console.log("hata")}
    </div>
  )
}

export default ImageList