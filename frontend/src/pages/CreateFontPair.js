import {useState, useEffect} from 'react'
import apiGenerateFonts from '../api/apiGenerateFonts'
import GenerateFont from '../components/GenerateFont'
import apiCalls from '../api/apiCalls'

function CreateFontPair() {

  const [serifFonts, setSerifFonts] = useState(null)
  const [sansSerifFonts, setSansSerifFonts] = useState(null)
  const [font1, setFont1] = useState('Prata')
  const [font2, setFont2] = useState('Anybody')
  const [feedback, setFeedback] = useState(null)

  useEffect(() => {
    getFonts()
  }, [])


  const getFonts = async () => {
    const data = await apiGenerateFonts.generateAllFonts()
    if (data) {
      console.log("all fonts: ", data)
      let serifData = data.filter(font => font.category === "serif" || font.category === "display")
      console.log("serif: ", serifData)
      setSerifFonts(serifData)
      let sansSerifData = data.filter(font => font.category === "sans-serif").slice(0, 40)
      setSansSerifFonts(sansSerifData)
    }
  }

  const handleSaveFontPair = async (e) => {
    e.preventDefault()

      let fontsData = {
        font1: font1,
        font2: font2,
      }
  
      console.log("fonts data: ", fontsData)
  
      const data = await apiCalls.createFontPair(fontsData)
  
      console.log("data: ", data)
  
      if (data) {
        console.log("received data", data)
        setFeedback('Font Pair saved')
      }
      else {
        setFeedback('Font Pair was not saved. Try again.')
    }
  }


  return (
    <div className="generate-palette__container">
      <h2>Create a Font Pair</h2>
      <GenerateFont fonts={serifFonts} font={font1} setFont={setFont1} initialFont="Prata" />
      <GenerateFont fonts={sansSerifFonts} font={font2} setFont={setFont2} initialFont="Anybody" />
      <button className='save-btn' onClick={handleSaveFontPair}>Save Font Pair</button>
      {feedback && <p>{feedback}</p>}
    </div>
  )
}

export default CreateFontPair