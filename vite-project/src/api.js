import axios from "axios"
const searchImages = async(term) => {
    const res = await axios.get("https://api.unsplash.com/search/photos",{
      headers:{
        Authorization:"Client-ID LCiCN1WQ3D-mL-uL9dJ-IdWCkcr4QhSZ2eVKR0vT6yk"
      },
      params:{
        query:term
      }
      
    })
    // console.log(res.data.results)
    return res
  }
export default searchImages;