import {useState, useEffect} from 'react'
import axios from 'axios'

function CreateFontPair() {

  const fontEndpoint=process.env.REACT_APP_FONT_ENDPOINT
  const fontKey=process.env.REACT_APP_API_KEY

  const [f1, setF1] = useState(null)


  // useEffect(() => {

  // })

  

  return (
    <div className="generate-palette__container">
      <h2>Create a Font Pair</h2>
      <label htmlFor="font1">
        <select className='selector--font' name="font1">
          <option>Choice 1</option>
        </select>
      </label>
      <div className='display__container'>
        <h3>The brown dog jumped over the gray fox.</h3>
        <h3>THE BROWN DOG JUMPED OVER THE GRAY FOX.</h3>
      </div>
    </div>
  )
}

export default CreateFontPair