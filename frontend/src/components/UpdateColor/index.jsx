import { useState, useEffect } from 'react';
import { ColorPicker, useColor } from 'react-color-palette'
import 'react-color-palette/lib/css/styles.css';
import apiGeneratePalettes from '../../api/apiGeneratePalettes';
import GeneratePalette from '../GeneratePalette';

function UpdateColor({baseColor, setBaseColor}) {

  const [color, setColor] = useColor('hex', `#${baseColor}`);
  const [contrastingPalette, setContrastingPalette] = useState(null)
  const [analogicPalette, setAnalogicPalette] = useState(null)
  const [complementaryPalette, setComplementaryPalette] = useState(null)
  const [arrayToExport, setArrayToExport] = useState(null)

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

  return (
    <div className="create__container">
      <ColorPicker width={228} height={114} color={color} onChange={setColor} hideRGB light />
      <button onClick={showContrastingPalette}>
        Generate contrasting palette
      </button>
      {contrastingPalette && <GeneratePalette currentPalette={contrastingPalette} title="Contrasting" />}
      <button onClick={showAnalogicPalette}>
        Generate analogic palette
      </button>
      {analogicPalette && <GeneratePalette currentPalette={analogicPalette} title="Analogic"/>}
      <button onClick={showComplementaryPalette}>
        Generate complementary palette
      </button>
      {complementaryPalette && <GeneratePalette currentPalette={complementaryPalette} title="Complementary"/>}


    </div>
  )
}

export default UpdateColor