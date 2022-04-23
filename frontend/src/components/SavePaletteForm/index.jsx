import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import apiCalls from '../../api/apiCalls'
import './SavePaletteForm.css'

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
    
      const data = await apiCalls.createColorPalette(paletteData)
    
      if (data) {
        // console.log("received data", data)
        setFeedback('Palette saved')
      }
      else {
        setFeedback('Palette was not saved. Try again.')
    }
  }


  return (
    <form className='form__container' onSubmit={handleSavePalette} method="POST">
        <label className='screenreader-only'>Palette Name: </label>
        <input type="text" name="name" placeholder="Enter palette name" />
        <button className='save-btn' role='button'>
          Save
        </button>
      <div className='feedback'>
        {feedback === 'Palette saved' 
          && <FontAwesomeIcon className="feedback-icon success" icon={faCheck} />
        }
        {feedback === 'Palette was not saved. Try again.' 
          && <FontAwesomeIcon className="feedback-icon error" icon={faExclamationTriangle} />
        }
        <p className='feedback__text'>{feedback}</p>
      </div>
    </form>
  )
}

export default SavePaletteForm