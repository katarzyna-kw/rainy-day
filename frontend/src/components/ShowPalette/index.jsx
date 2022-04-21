import {useState, useEffect} from 'react'
import apiCalls from '../../api/apiCalls'
import apiGeneratePalettes from '../../api/apiGeneratePalettes'
import EditPaletteColor from '../EditPaletteColor'
import DeletePalette from '../DeletePalette'
import EditPaletteName from '../EditPaletteName'

function ShowPalette({currentPalette, removePaletteFromView, editNameInView}) {

  const [renaming, setRenaming] = useState(false)
  const [lightNeutral, setLightNeutral] = useState(null)
  const [darkNeutral, setDarkNeutral] = useState(null)

  const addNeutral = async (color) => {
    const data = await apiGeneratePalettes.generateNeutral(color)
    
    if (data) {
      let random = Math.floor(Math.random() * 9)
      let randomNeutral = data.colors[random].hex.value;
      console.log("neutral choice: ", randomNeutral)
      
      if (color === 'FFFFFF') {
        setLightNeutral(randomNeutral)
      }
      else {
        setDarkNeutral(randomNeutral)
      }
    }
  }

  return (
    <div className="show-palette__container">
      <h2>{currentPalette.name}</h2>
      <div className='palette__container'>
        {currentPalette.colors.map((color, i) => (
          <div key={i} style={{backgroundColor: `${color}`}}className='palette-color'>{color}</div>
        ))}
        {(!lightNeutral && !currentPalette.color5) && 
        <div style={{backgroundColor: `${currentPalette.color5}`}} className="palette-color clickable" onClick={() => addNeutral('FFFFFF')}>
          {(currentPalette.color5!== null) ? currentPalette.color5 : "Add a light neutral color"}
        </div>
      } 
        {lightNeutral &&         
          <div style={{backgroundColor: `${lightNeutral}`}} className="palette-color">
            {lightNeutral}
          </div>
        }
        <EditPaletteColor currentPalette={currentPalette} lightNeutral={lightNeutral} setLightNeutral={setLightNeutral} />
        {/* <EditPaletteColor currentPalette={currentPalette} neutral={darkNeutral} setNeutral={setDarkNeutral} /> */}
      </div>
      <EditPaletteName currentPalette={currentPalette} renaming={renaming} setRenaming={setRenaming} editNameInView={editNameInView} />
      <DeletePalette currentPalette={currentPalette} removePaletteFromView={removePaletteFromView} />
    </div>
  )
}

export default ShowPalette