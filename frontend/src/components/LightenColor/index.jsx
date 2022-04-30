import { useState, useEffect } from 'react'
import apiGeneratePalettes from '../../api/apiGeneratePalettes'
import apiCalls from '../../api/apiCalls'

function LightenColor({color}) {

  const [newColor, setNewColor] = useState(null) 

  const getHSL = async (color) => {

    console.log("color b4 axios: ", color)

    let hexOnly = color.slice(1,)

    console.log("hex? : ", hexOnly)

    const data = await apiGeneratePalettes.getSingleColor(hexOnly)

    if (data) {
      console.log("color data: ", data)

      let hslColorInfo = data.hsl.value
      let hslH = data.hsl.h
      let hslS = data.hsl.s
      let hslLAsNum = Number(data.hsl.l)

      console.log("l: ", hslColorInfo, hslH, hslS, hslLAsNum)

      let newShadeArg = `${hslH},${hslS}%,${hslLAsNum-20}%`

      lightenColorByHSL(newShadeArg)
    }
      else {
        console.log("oh noo")
    }
  }

  const lightenColorByHSL = async (hslVal) => {
    const data = await apiGeneratePalettes.getSingleColorByHSL(hslVal)

    if (data) {
      console.log("new color data:", data)
      let newColorHex = data.hex.value
      console.log("newcolorhex: ", newColorHex)
      setNewColor(newColorHex)

    } else {
      console.log("error in hsl call")
    }
  }


  return (
    <button style={{backgroundColor: `${newColor}`}} className='minus' onClick={() => getHSL(color)}>
      -
    </button>
    )
}

export default LightenColor