import { useState, useEffect } from 'react';
import { ColorPicker, useColor } from 'react-color-palette'
import 'react-color-palette/lib/css/styles.css';
import apiGeneratePalettes from '../../api/apiGeneratePalettes';
import GeneratePalette from '../GeneratePalette';
import './UpdatePalette.css'

function UpdateColor({baseColor, setBaseColor}) {

  const [color, setColor] = useColor('hex', `#${baseColor}`);
  const [contrastingPalette, setContrastingPalette] = useState(null)
  const [analogicPalette, setAnalogicPalette] = useState(null)
  const [complementaryPalette, setComplementaryPalette] = useState(null)
  const [arrayToExport, setArrayToExport] = useState(null)
  const [isMobile, setIsMobile] = useState(false);
  const [colorPickerSize, setColorPickerSize] = useState(300)

  const updateColorPickerSize = () => {
    if (window.innerWidth < 300) {
      setIsMobile(true)
      setColorPickerSize(200)
    }
    else {
      setIsMobile(false)
      setColorPickerSize(300)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", updateColorPickerSize);
    return () => window.removeEventListener("resize", updateColorPickerSize);
  })


  useEffect(() => {
    setBaseColor(color)
  })

  const showContrastingPalette = async () => {
    setAnalogicPalette(null)
    setComplementaryPalette(null)
    let baseWithoutHex = baseColor.hex.replace("#", "")
    const data = await apiGeneratePalettes.generateContrastingPalette(baseWithoutHex)

    if (data) {
      let paletteArray = []
      for (let i=0; i<data.colors.length; i++) {
        paletteArray.push(data.colors[i].hex)
      }
      setContrastingPalette(paletteArray)
    } else {
      console.log("oops, error")
    }
  }

  const showAnalogicPalette = async () => {
    setContrastingPalette(null)
    setComplementaryPalette(null)
    let baseWithoutHex = baseColor.hex.replace("#", "")
    const data = await apiGeneratePalettes.generateAnalogicPalette(baseWithoutHex)

    if (data) {
      let paletteArray = []
      for (let i=0; i<data.colors.length; i++) {
        paletteArray.push(data.colors[i].hex)
      }
      setAnalogicPalette(paletteArray)
    } else {
      console.log("oops, error")
    }
  }

  const showComplementaryPalette = async () => {
    setAnalogicPalette(null)
    setContrastingPalette(null)
    let baseWithoutHex = baseColor.hex.replace("#", "")
    const data = await apiGeneratePalettes.generateComplementaryPalette(baseWithoutHex)

    if (data) {
      let paletteArray = []
      for (let i=0; i<data.colors.length; i++) {
        paletteArray.push(data.colors[i].hex)
      }
      paletteArray.push({value: `#${baseWithoutHex.toUpperCase()}`, clean: `${baseWithoutHex.toUpperCase()}`})
      setComplementaryPalette(paletteArray)
    } else {
      console.log("oops, error")
    }
  }


  // onChange={e => { this.functionOne(e); this.functionTwo() }}

  return (
    <div className="create__container">
      <div className='colorpicker__container'>
        <h4>Pick a base color:</h4>
        {/* <ColorPicker className="color-picker" width={colorPickerSize} height={200} color={color} onChange={setColor} hideRGB light /> */}
        <ColorPicker className="color-picker" width={colorPickerSize} height={200} color={color} onChange={e => {setColor(e); showContrastingPalette(e) }} hideRGB light />
      </div>
      <div className='palettes__container'>
        <h4>Generate a palette:</h4>
        <div className="btn__container">
          <button className="btn" onClick={showContrastingPalette}>
            Contrasting
          </button>
          <button className="btn" onClick={showAnalogicPalette}>
            Analogic
          </button>
          <button className="btn" onClick={showComplementaryPalette}>
            Complementary
          </button>
        </div>
        {contrastingPalette && <GeneratePalette currentPalette={contrastingPalette} title="Contrasting" />}
        {analogicPalette && <GeneratePalette currentPalette={analogicPalette} title="Analogic"/>}
        {complementaryPalette && <GeneratePalette currentPalette={complementaryPalette} title="Complementary"/>}
      </div>
    </div>
  )
}

export default UpdateColor