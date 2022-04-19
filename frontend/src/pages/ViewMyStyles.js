import { useEffect, useState } from "react"
import apiCalls from "../api/apiCalls"
import ShowPalette from "../components/ShowPalette"

function ViewMyStyles({user}) {

  const removePaletteFromView = (deletedPaletteId) => {
    const updatedPalettes = palettes.filter((palette) => {
      return palette.id !== deletedPaletteId
    })
    setPalettes(updatedPalettes)
  }

  const [palettes, setPalettes] = useState(null)

  useEffect(() => {
    loadPalettes()
  }, [user])

  const loadPalettes = async () => {
    let data = await apiCalls.getAllColorPalettes()
    console.log("data: ", data)
    setPalettes(data ? data : [])
  }

  return (
    <div>
      <h2>My Styles</h2>
      {palettes && palettes.map((palette) => (
        <ShowPalette key={palette.id} currentPalette={palette} removePaletteFromView={removePaletteFromView} />
      ))}
    </div>
  )
}

export default ViewMyStyles