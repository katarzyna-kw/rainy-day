import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import apiCalls from "../../api/apiCalls"
import MiniFontPairView from '../MiniFontPairView'
import MiniPaletteView from "../MiniPaletteView.js"
import createPalette from '../../assets/palette.gif'
import createPair from '../../assets/font-pair.gif'

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
      {(palettes && palettes.length > 0) && 
      <div className="hp-info__palettes">
        <h2 className="hp--subhead">My Latest Palette</h2>
        {(palettes && palettes.length > 0) ? <MiniPaletteView user={user} currentPalette={palettes[0]} /> : null}
        <Link to={`/view-palettes`}>
          <button className="btn btn-view-more">View More Palettes</button>
        </Link>
      </div>
      }
      {(fontPairs && fontPairs.length > 0) &&
      <div className="hp-info__font-pairs">
          <h2 className="hp--subhead">My Latest Font Pair</h2>
          {fontPairs ? <MiniFontPairView user={user} currentPair={fontPairs[0]} /> : null}
          <Link to={`/view-fonts`}>
            <button className="btn btn-view-more">View More Font Pairs</button>
          </Link>
        </div>
      }
      {
      (palettes && palettes == 0) && 
      <div className="hp-info__palettes how-to">
        <Link to={`/create-color-palette`}>
          <button className="btn">Create a color palette</button>
        </Link>
        <img className="how-to__img palette_img" src={createPalette} alt="Create a palette" />
      </div> 
      }
      {
      (fontPairs && fontPairs == 0) && 
      <div className="hp-info__font-pairs how-to">
        <Link to={`/create-font-pair`}>
          <button className="btn">Create a font pair</button>
        </Link>
        <img className="how-to__img" src={createPair} alt="Create a font pair" />
      </div> 
      }

    </div>
  )
}

export default LoggedIn