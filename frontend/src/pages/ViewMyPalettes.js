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

  const updateColorPalette = (newColorPalette) => {
    let newPalettes = [...palettes]
    for (let i=0; i<newPalettes.length; i++) {
      if (newColorPalette.id == newPalettes[i].id) {
        newPalettes[i] = newColorPalette
        break
      }
    }
    setPalettes(newPalettes)
  }

  return (
    <section className="section-column">
      <h2>My Color Palettes </h2>
      <div className="styles__container">
        <div className="palettes__container">
          {palettes && palettes.map((palette) => (
            <ShowPalette key={palette.id} currentPalette={palette} removePaletteFromView={removePaletteFromView} editNameInView={editNameInView} updateColorPalette={updateColorPalette} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ViewMyPalettes