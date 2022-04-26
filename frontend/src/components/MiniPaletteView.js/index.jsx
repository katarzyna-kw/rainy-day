import './MiniPaletteView.css'

function MiniPaletteView({user, currentPalette}) {
  return (
    <div className='mini-palette__container'>
      <h3 className="mini-palette__header">{currentPalette ? currentPalette.name : "Unavailable"}</h3>
      {currentPalette && <div className='palette__container--view mini-palette__container--view'>
        {currentPalette.colors.map((color, i) => 
          color && (
          <div key={i} style={{backgroundColor: `${color}`}}className='palette-color' id="mini-palette-color">
            <p className="palette-color__text">
              {color}
            </p>
          </div>
        ))}
      </div>
      }
    </div>
  )
}

export default MiniPaletteView