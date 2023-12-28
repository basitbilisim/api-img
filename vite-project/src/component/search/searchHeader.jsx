import React from 'react'
import { useState } from 'react'
const searchHeader = ({search}) => {
  const [Ivalue,setValue] = useState("")
  const handleFormSubmit = (event) => { 
    event.preventDefault();
    console.log(search);
    search(Ivalue)
  }
  return (
    <div>
        <form onSubmit={handleFormSubmit} >
            <label htmlFor="">Search Image</label>
            <input value={Ivalue} onChange={(e) => {setValue(e.target.value)}}/>
        </form>
    </div>
  )
}

export default searchHeader