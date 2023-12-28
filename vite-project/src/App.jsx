import { useState } from 'react'
import './App.css'
import SearchHeader from './component/search/searchHeader'
import ImageList from './component/imageList/imageList'
import searchImages from "./api"
import ImageItem from './component/imageItem/imageItem'
function App() {
  const [images,setImages] = useState([])
  const handleSubmit = async(term) => {
    const data = await searchImages(term)
    setImages(data)
  }
 
  return (
    <>
      <SearchHeader search={handleSubmit}/>
      <ImageList imageIn={images}/>
    </>
  )
}

export default App
