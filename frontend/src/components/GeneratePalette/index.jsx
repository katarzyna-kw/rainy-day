import React from 'react'
import SavePaletteForm from '../SavePaletteForm/'

function GeneratePalette({currentPalette, title}) {

  return (
    <div className='generate-palette__container'>
      <h2>{title} Palette</h2>
      <div className='palette__container'>
        {currentPalette && currentPalette.map((color, i) => (
          <div key={i} style={{backgroundColor: `${color.value}`}} className='palette-color'>
            {color.value}
          </div>
        ))}
      </div>
      <SavePaletteForm currentPalette={currentPalette}/>
    </div>
  )
}

export default GeneratePalette