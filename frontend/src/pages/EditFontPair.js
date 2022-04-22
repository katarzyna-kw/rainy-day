import {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import apiGenerateFonts from '../api/apiGenerateFonts'
import GenerateFont from '../components/GenerateFont'
import apiCalls from '../api/apiCalls'

function EditFontPair() {

  const params = useParams()

  const fontPairIndex = params.fontPairId
  const location = useLocation()
  const currentPair = location.state;
  const [serifFonts, setSerifFonts] = useState(null)
  const [sansSerifFonts, setSansSerifFonts] = useState(null)
  const [font1, setFont1] = useState(currentPair.font1)
  const [font2, setFont2] = useState(currentPair.font2)
  const [feedback, setFeedback] = useState(null)

  useEffect(() => {
    getFonts()
  }, [])

  const getFonts = async () => {
    const data = await apiGenerateFonts.generateAllFonts()
    if (data) {
      let serifData = data.filter(font => font.category === "serif" || font.category === "display")
      setSerifFonts(serifData)
      let sansSerifData = data.filter(font => font.category === "sans-serif").slice(0, 40)
      setSansSerifFonts(sansSerifData)
    }
  }

  const handleEditFontPair = async (e) => {
    e.preventDefault()

      let newFontsData = {
        font1: font1,
        font2: font2,
      }
  
      console.log("updated fonts data pre axios: ", newFontsData)
      console.log("currentpair id pre axios: ", currentPair.id)
  
      const data = await apiCalls.updateFontPairById(currentPair.id, newFontsData)
  
      console.log("data from axios call: ", data)
  
      if (data) {
        console.log("received data from axios", data)
        setFeedback('Font Pair saved')
      }
      else {
        setFeedback('Font Pair was not saved. Try again.')
    }
  }

  useEffect(() => {
    console.log("currentpair in effect: ", currentPair)
    // setFont1(currentPair.font1)
    // setFont2(currentPair.font2)
    }, 
  [handleEditFontPair])

  return (
    <div className="generate-palette__container">
      <h2>Edit a Font Pair</h2>
      <GenerateFont fonts={serifFonts} font={font1} setFont={setFont1} initialFont={currentPair.font1} />
      <GenerateFont fonts={sansSerifFonts} font={font2} setFont={setFont2} initialFont={currentPair.font2} />
      <button className='save-btn' onClick={handleEditFontPair}>Save Font Pair</button>
      {feedback && <p>{feedback}</p>}
    </div>
  )
}

export default EditFontPair