import React from 'react'
import SavePaletteForm from '../SavePaletteForm/'

function GeneratePalette({currentPalette, title}) {

  console.log("current in generate: ", currentPalette)

  return (
    <div className='generate-palette__container'>
      <h2>{title} Palette</h2>
      <div className='palette__container'>
        <div style={{backgroundColor: `${currentPalette[0].value}`}}className='palette-color'>
          {currentPalette[0].value}
        </div>
        <div style={{backgroundColor: `${currentPalette[1].value}`}}className='palette-color'>
          {currentPalette[1].value}
        </div>
        <div style={{backgroundColor: `${currentPalette[2].value}`}}className='palette-color'>
          {currentPalette[2].value}
        </div>
        <div style={{backgroundColor: `${currentPalette[3].value}`}}className='palette-color'>
          {currentPalette[3].value}
        </div>
      </div>
      <SavePaletteForm currentPalette={currentPalette}/>
    </div>
  )
}

export default GeneratePalette