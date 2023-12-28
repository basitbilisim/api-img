import React from 'react'

const ImageItem = ({item}) => {
  console.log(item);
  return (
    <>
      {item ? <img src={item.urls.small} alt="" /> : console.log("hata")}
    </>
  )
}

export default ImageItem