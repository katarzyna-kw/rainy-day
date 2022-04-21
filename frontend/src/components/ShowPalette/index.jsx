import {useState, useEffect} from 'react'
import apiCalls from '../../api/apiCalls'
import apiGeneratePalettes from '../../api/apiGeneratePalettes'
import DeletePalette from '../DeletePalette'
import EditPaletteName from '../EditPaletteName'

function ShowPalette({currentPalette, removePaletteFromView, editNameInView}) {

  // console.log("current palette in ShowPal: ", currentPalette)

  const [renaming, setRenaming] = useState(false)
  const [lightNeutral, setLightNeutral] = useState(null)
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    console.log("light neutral after set: ", lightNeutral)
  }, [lightNeutral])

  const checkThis = (color) => {
    setLightNeutral(color)
    console.log("light neutral after set: ", lightNeutral)
  }


  const addNeutral = async (color) => {
    const data = await apiGeneratePalettes.generateNeutral(color)
    
    if (data) {
      console.log("neutral palette info: ", data)
      let random = Math.floor(Math.random() * 9)

      let neutralChoice = data.colors[random].hex.value;
      console.log("neutral choice: ", neutralChoice)
      checkThis(neutralChoice)
    }
  }



  const addToPalette = async (e, lightNeutral) => {

    console.log("in parma in add to palette: ", lightNeutral)

    let newColorData = {
      color5: lightNeutral
    }

    console.log("new color data: ", newColorData)

    const data = await apiCalls.updateColorPaletteById(currentPalette.id, newColorData)

    if (data) {
      console.log("think it updated")
    } else {
      console.log("error updating")
    }
  }  

  return (
    <div className="show-palette__container">
      <h2>{currentPalette.name}</h2>
      <div className='palette__container'>
        <div style={{backgroundColor: `${currentPalette.color1}`}}className='palette-color'>
          {currentPalette.color1}
        </div>
        <div style={{backgroundColor: `${currentPalette.color2}`}}className='palette-color'>
          {currentPalette.color2}
        </div>
        <div style={{backgroundColor: `${currentPalette.color3}`}}className='palette-color'>
          {currentPalette.color3}
        </div>
        <div style={{backgroundColor: `${currentPalette.color4}`}}className='palette-color'>
          {currentPalette.color4}
        </div>
        {!lightNeutral && <div style={{backgroundColor: `${currentPalette.color5}`}} className="palette-color" onClick={() => addNeutral('FFFFFF')}>
          Add a light neutral color
        </div>
        }
        {isSaved && <div style={{backgroundColor: `${currentPalette.color5}`}} className="palette-color">
          {currentPalette.color5}
        </div>
        }
        {lightNeutral &&         
          <div style={{backgroundColor: `${lightNeutral}`}} className="palette-color">
            {lightNeutral}
          </div>
        }
        {lightNeutral && !isSaved && 
          <button className='save-btn' onClick={addToPalette}>
            save palette with light neutral
          </button>
        }
      </div>
      <EditPaletteName currentPalette={currentPalette} renaming={renaming} setRenaming={setRenaming} editNameInView={editNameInView} />
      <DeletePalette currentPalette={currentPalette} removePaletteFromView={removePaletteFromView} />
    </div>
  )
}

export default ShowPalette