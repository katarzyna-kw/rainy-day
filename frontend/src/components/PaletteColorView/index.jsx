import LightenColor from "../LightenColor"

function PaletteColorView({currentColor, i, setColorChange}) {
  return (
    <div key={currentColor} style={{backgroundColor: `${currentColor}`}}className='palette-color'>
    {/* <LightenColor currentPalette={currentPalette} currentColor={currentColor} i={i} setColorChange={setColorChange} /> */}
    <p className="palette-color__text">
      {currentColor}
    </p>
  </div>
)
}

export default PaletteColorView