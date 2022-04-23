import { useEffect, useState } from "react"
import apiCalls from "../api/apiCalls"
import ShowFontPair from "../components/ShowFontPair"
import ShowPalette from "../components/ShowPalette"

function ViewMyStyles({user}) {

  const [palettes, setPalettes] = useState(null)
  const [fontPairs, setFontPairs] = useState(null)

  const removePaletteFromView = (deletedPaletteId) => {
    const updatedPalettes = palettes.filter((palette) => {
      return palette.id !== deletedPaletteId
    })
    setPalettes(updatedPalettes)
  }

  const removePairFromView = (deletedPairId) => {
    const updatedPairs = fontPairs.filter((pair) => {
      return pair.id !== deletedPairId
    })
    setFontPairs(updatedPairs)
  }

  const editNameInView = () => {
    loadPalettes()
  }


  useEffect(() => {
    loadPalettes()
    loadFontPairs()
  }, [user])

  const loadPalettes = async () => {
    let data = await apiCalls.getAllColorPalettes()
    setPalettes(data ? data : [])
  }

  const loadFontPairs = async () => {
    let data = await apiCalls.getAllFontPairs()
    setFontPairs(data ? data : [])
  }


  return (
    <section className="section-column">
      <h2>My Styles</h2>
      {palettes && palettes.map((palette) => (
        <ShowPalette key={palette.id} currentPalette={palette} removePaletteFromView={removePaletteFromView} editNameInView={editNameInView} />
      ))}
      {fontPairs && fontPairs.map((pair, i) => (
        <ShowFontPair key={pair.id} currentPair={pair} removePairFromView={removePairFromView} />
      ))}
    </section>
  )
}

export default ViewMyStyles