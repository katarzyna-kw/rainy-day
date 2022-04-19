import {useState} from 'react'
import apiCalls from '../../api/apiCalls'

function SavePaletteForm({currentPalette}) {

  const [feedback, setFeedback] = useState('')

  const handleSavePalette = async (e) => {
    e.preventDefault()
      let paletteData = {
        name: e.target.elements["name"].value,
        color1: currentPalette[0].value,
        color2: currentPalette[1].value,
        color3: currentPalette[2].value,
        color4: currentPalette[3].value,
      }
  
      console.log("palette data: ", paletteData)
  
      const data = await apiCalls.createColorPalette(paletteData)
  
      console.log("data: ", data)
  
      if (data) {
        console.log("received data", data)
        setFeedback('Palette saved')
      }
      else {
        setFeedback('Palette was not saved. Try again.')
    }
  }


  return (
    <form className='button__container' onSubmit={handleSavePalette} method="POST">
      <label>Name of palette: </label>
      <input type="text" name="name" placeholder="Enter palette name" />
      <button className='save-btn'>
        Save Color Palette
      </button>
      <p>{feedback}</p>
    </form>
  )
}

export default SavePaletteForm