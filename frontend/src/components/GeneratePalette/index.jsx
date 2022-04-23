import {useEffect} from 'react'
import SavePaletteForm from '../SavePaletteForm/'
import './GeneratePalette.css'

function GeneratePalette({currentPalette, title}) {

  return (
    <div className='generate-palette__container'>
      <h2>{title}</h2>
      <div className='palette__container'>
        {currentPalette && currentPalette.map((color, i) => (
          <div key={i} style={{backgroundColor: `${color.value}`}} className='palette-color'>
            <p className='palette-color__text'>{color.value}</p>
          </div>
        ))}
      </div>
      <SavePaletteForm currentPalette={currentPalette}/>
    </div>
  )
}

export default GeneratePalette