import { useEffect, useState } from "react"
import apiCalls from "../api/apiCalls"
import ShowFontPair from "../components/ShowFontPair"

function ViewMyFonts({user}) {

  const [fontPairs, setFontPairs] = useState(null)

  const removePairFromView = (deletedPairId) => {
    const updatedPairs = fontPairs.filter((pair) => {
      return pair.id !== deletedPairId
    })
    setFontPairs(updatedPairs)
  }

  useEffect(() => {
    loadFontPairs()
  }, [user])

  const loadFontPairs = async () => {
    let data = await apiCalls.getAllFontPairs()
    setFontPairs(data ? data : [])
  }


  return (
    <section className="section-column">
      <h2>My Font Pairs</h2>
      <div className="styles__container">
        <div className="font-pairs__container" id="fonts">
          {fontPairs && fontPairs.map((pair, i) => (
            <ShowFontPair key={pair.id} currentPair={pair} removePairFromView={removePairFromView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ViewMyFonts