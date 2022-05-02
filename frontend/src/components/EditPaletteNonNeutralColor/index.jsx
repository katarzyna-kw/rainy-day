import { useState, useEffect } from 'react'
import LightenColor from '../LightenColor'

function EditPaletteNonNeutralColor({currentPalette}) {

  const [colorChange, setColorChange] = useState(false)

  useEffect(() => {
    console.log("ok")
    console.log("color change? ", colorChange)
    console.log("current pal: ", currentPalette)
    console.log("change in ef: ", colorChange)
  }, [colorChange])

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