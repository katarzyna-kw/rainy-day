import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
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
      // console.log("serif: ", serifData)
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
  
      // console.log("fonts data: ", fontsData)
  
      const data = await apiCalls.createFontPair(fontsData)
  
      // console.log("data: ", data)
  
      if (data) {
        setFeedback('Font Pair saved')
      }
      else {
        setFeedback('Font Pair was not saved. Try again.')
    }
  }


  return (
    <section className="section-column">
      <h2>Create a Font Pair</h2>
      <GenerateFont fonts={serifFonts} font={font1} setFont={setFont1} initialFont="Prata" num="1" />
      <GenerateFont fonts={sansSerifFonts} font={font2} setFont={setFont2} initialFont="Anybody" num="2" />
      <button className='save-btn' onClick={handleSaveFontPair}>Save Font Pair</button>
      <div className='feedback'>
        {feedback === 'Font Pair saved' 
          && <FontAwesomeIcon className="feedback-icon success" icon={faCheck} />
        }
        {feedback === 'Font Pair was not saved. Try again.' 
          && <FontAwesomeIcon className="feedback-icon error" icon={faExclamationTriangle} />
        }
        <p className='feedback__text'>{feedback}</p>
      </div>
    </section>
  )
}

export default CreateFontPair