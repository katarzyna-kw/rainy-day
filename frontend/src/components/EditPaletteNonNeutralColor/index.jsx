import { useState, useEffect } from 'react'
import PaletteColorView from '../PaletteColorView'
import LightenColor from '../LightenColor'

function EditPaletteNonNeutralColor({currentPalette}) {

  const [colorChange, setColorChange] = useState(false)
  // const [newColor, setNewColor] = useState(null)

  useEffect(() => {
    console.log("current pal in ed: ", currentPalette)
  }, [currentPalette])

  return (
      currentPalette.colors.map((currentColor, i) => 
        currentColor && (
          <div key={currentColor} style={{backgroundColor: `${currentColor}`}}className='palette-color'>
            {/* <LightenColor currentPalette={currentPalette} currentColor={currentColor} i={i} setColorChange={setColorChange} /> */}
            <p className="palette-color__text">
              {currentColor}
            </p>
          </div>
        ))
  )
}

export default EditPaletteNonNeutralColor