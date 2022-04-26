import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import apiCalls from "../../api/apiCalls"
import MiniFontPairView from '../MiniFontPairView'
import MiniPaletteView from "../MiniPaletteView.js"

function LoggedIn({user}) {

  const [palettes, setPalettes] = useState(null)
  const [fontPairs, setFontPairs] = useState(null)

  useEffect(() => {
    loadPalettes()
    loadFontPairs()
  }, [user])

  const loadPalettes = async () => {
    let data = await apiCalls.getAllColorPalettes()
    setPalettes(data ? data : null)
  }

  const loadFontPairs = async () => {
    let data = await apiCalls.getAllFontPairs()
    setFontPairs(data ? data : null)
  }

  console.log("pal: ", palettes)

  console.log("fp: ", fontPairs)

  return (
    <div className="hp-info__container">
      <div className="hp-info__palettes">
        <h2 className="hp--subhead">My Latest Palette</h2>
        {(palettes && palettes.length > 0) ? <MiniPaletteView user={user} currentPalette={palettes[0]} /> : null}
        <Link to={`/view-palettes`}>
          <button className="btn btn-view-more">View More Palettes</button>
        </Link>
      </div>
      <div className="hp-info__font-pairs">
          <h2 className="hp--subhead">My Latest Font Pair</h2>
          {fontPairs ? <MiniFontPairView user={user} currentPair={fontPairs[0]} /> : null}
          <Link to={`/view-fonts`}>
          <button className="btn btn-view-more">View More Font Pairs</button>
          </Link>
        </div>
    </div>
  )
}

export default LoggedIn