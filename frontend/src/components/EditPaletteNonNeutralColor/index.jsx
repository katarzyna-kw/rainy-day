import { useState, useEffect } from 'react'
import PaletteColorView from '../PaletteColorView'
import LightenColor from '../LightenColor'

function EditPaletteNonNeutralColor({currentPalette, updateColorPalette}) {

  // const [colorChange, setColorChange] = useState(false)
  // const [newColor, setNewColor] = useState(null)

  useEffect(() => {
    console.log("current palette in ed: ", currentPalette)
  }, [currentPalette])

  return (
      currentPalette.colors.map((currentColor, i) => 
        currentColor && (
          <div key={currentColor} style={{backgroundColor: `${currentColor}`}}className='palette-color'>
            <p className="palette-color__text">
              {currentColor}
            </p>
            <LightenColor currentPalette={currentPalette} currentColor={currentColor} i={i} updateColorPalette={updateColorPalette} />
          </div>
        ))
  )
}

export default EditPaletteNonNeutralColor