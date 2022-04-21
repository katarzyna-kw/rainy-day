import {useState} from 'react'
import apiCalls from '../../api/apiCalls'

function EditPaletteColor({currentPalette, lightNeutral, setLightNeutral}) {

  const [isSaved, setIsSaved] = useState(false)
  const [error, setError] = useState(false)

  const cancelEdit = (e) => {
    e.preventDefault()
    setLightNeutral(false)
  }

  const addNeutralToPalette = async () => {

    let newColorData = {
      color5: lightNeutral
    }

    const data = await apiCalls.updateColorPaletteById(currentPalette.id, newColorData)

    if (data) {
      setIsSaved(true)
    } else {
      console.log("error updating")
      setError(true)
    }
  }  


  return (
    <div className='edit__container'>
      {lightNeutral && !isSaved && 
        <div className='btn__container'>
          <button className='save-btn' onClick={addNeutralToPalette}>
            save palette with light neutral
          </button>
          <button onClick={cancelEdit}>x</button>
        </div>
      }
      {error && <p>Error saving palette. Try again.</p>}
    </div>
  )
}

export default EditPaletteColor
