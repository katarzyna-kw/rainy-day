import {useState} from 'react'
import DeletePalette from '../DeletePalette'
import EditPaletteName from '../EditPaletteName'

function ShowPalette({currentPalette, removePaletteFromView}) {

  const [renaming, setRenaming] = useState(false)


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
      </div>
      <button>Add neutral color to {currentPalette.name}</button>
      <EditPaletteName currentPalette={currentPalette} renaming={renaming} setRenaming={setRenaming} />
      <DeletePalette currentPalette={currentPalette} removePaletteFromView={removePaletteFromView} />
    </div>
  )
}

export default ShowPalette