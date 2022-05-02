import {useEffect, useState} from 'react'
import apiCalls from '../../api/apiCalls'
import apiGeneratePalettes from '../../api/apiGeneratePalettes'
import EditPaletteColor from '../EditPaletteColor'
import DeletePalette from '../DeletePalette'
import EditPaletteName from '../EditPaletteName'
import CopyPalette from '../CopyPalette'
import LightenColor from '../LightenColor'
import './ShowPalette.css'
import EditPaletteNonNeutralColor from '../EditPaletteNonNeutralColor'

function ShowPalette({currentPalette, removePaletteFromView, editNameInView}) {

  const [renaming, setRenaming] = useState(false)
  const [lightNeutral, setLightNeutral] = useState(null)
  const [darkNeutral, setDarkNeutral] = useState(null)
  const [lightIsSaved, setLightIsSaved] = useState(false)
  const [darkIsSaved, setDarkIsSaved] = useState(false)
  const [lightError, setLightError] = useState(false)
  const [darkError, setDarkError] = useState(false)

  // useEffect(() => {
  //   console.log("ok")
  //   console.log("current pal: ", currentPalette)
  // }, [currentPalette])


  const addNeutral = async (color) => {
    const data = await apiGeneratePalettes.generateNeutral(color)
    
    if (data) {
      let random = Math.floor(Math.random() * 9)
      let randomNeutral = data.colors[random].hex.value;
      console.log("neutral choice: ", randomNeutral)
      
      if (color === 'FFFFFF') {
        setLightNeutral(randomNeutral)
        setLightIsSaved(false)
      }
      else {
        setDarkNeutral(randomNeutral)
        setDarkIsSaved(false)
      }
    }
  }

  const addNeutralToPalette = async (color) => {

    let newColorData = {}
    if (color === lightNeutral) {
      newColorData = {
        color5: lightNeutral
      }  
    } else {
      newColorData = {
        color6: darkNeutral
      }
    }

    const data = await apiCalls.updateColorPaletteById(currentPalette.id, newColorData)

    if (data && color === lightNeutral) {
      setLightIsSaved(true)
      setLightError(false)
    } else if (data && color === darkNeutral) {
      setDarkIsSaved(true)
      setDarkError(false)
    } else {
      if (color === lightNeutral) setLightError(true)
      else if (color === darkNeutral) {
        setDarkError(true)
      }
    }
  }

  return (
    <div className="show-palette__container">
      <h2 className="palette__header">{currentPalette.name}</h2>
      <div className="palette-options--container">
        <EditPaletteName currentPalette={currentPalette} renaming={renaming} setRenaming={setRenaming} editNameInView={editNameInView} />
        <DeletePalette currentPalette={currentPalette} removePaletteFromView={removePaletteFromView} />
        <CopyPalette currentPalette={currentPalette} />
      </div>
      <div className='palette__container--view'>
        {currentPalette && <EditPaletteNonNeutralColor currentPalette={currentPalette} /> }
        {(!lightNeutral && !currentPalette.color5) && 
          <div className="clickable--light" onClick={() => addNeutral('FFFFFF')}>
            {(currentPalette.color5!== null) ? currentPalette.color5 : "Add a light neutral color"}
          </div>
        }
        {lightNeutral && !currentPalette.color5 &&         
          <div style={{backgroundColor: `${lightNeutral}`}} className="palette-color">
            <p className="palette-color__text">
              {lightNeutral}
            </p>
          </div>
        }
        {(!darkNeutral && !currentPalette.color6) && 
          <div style={{backgroundColor: `${currentPalette.color6}`}} className="clickable--dark" onClick={() => addNeutral('0A0B0A')}>
            {(currentPalette.color6!== null) ? currentPalette.color6 : "Add a dark neutral color"}
          </div>
        } 
        {darkNeutral && !currentPalette.color6 &&    
          <div style={{backgroundColor: `${darkNeutral}`}} className="palette-color">
            <p className="palette-color__text">
              {darkNeutral}
            </p>
          </div>
        }
        <EditPaletteColor neutral={lightNeutral} neutralSet={setLightNeutral} addNeutralToPalette={addNeutralToPalette} isSaved={lightIsSaved} setIsSaved={setLightIsSaved} neutralError={lightError} adjective="light" />
        <EditPaletteColor neutral={darkNeutral} neutralSet={setDarkNeutral} addNeutralToPalette={addNeutralToPalette} isSaved={darkIsSaved} setIsSaved={setDarkIsSaved} neutralError={darkError} adjective="dark" />
      </div>
    </div>
  )
}

export default ShowPalette