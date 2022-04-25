import { useEffect, useState } from "react"
import apiCalls from "../api/apiCalls"
import ShowPalette from "../components/ShowPalette"

function ViewMyPalettes({user}) {

  const [palettes, setPalettes] = useState(null)

  const removePaletteFromView = (deletedPaletteId) => {
    const updatedPalettes = palettes.filter((palette) => {
      return palette.id !== deletedPaletteId
    })
    setPalettes(updatedPalettes)
  }

  const editNameInView = () => {
    loadPalettes()
  }


  useEffect(() => {
    loadPalettes()
  }, [user])

  const loadPalettes = async () => {
    let data = await apiCalls.getAllColorPalettes()
    setPalettes(data ? data : [])
  }

  return (
    <section className="section-column">
      <h2>My Color Palettes</h2>
      <div className="styles__container">
        <div className="palettes__container">
          {palettes && palettes.map((palette) => (
            <ShowPalette key={palette.id} currentPalette={palette} removePaletteFromView={removePaletteFromView} editNameInView={editNameInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ViewMyPalettes