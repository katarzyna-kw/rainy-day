import {useState, useEffect} from 'react'
import apiGenerateFonts from '../api/apiGenerateFonts'
import GenerateFont from '../components/GenerateFont'

function CreateFontPair() {

  const [serifFonts, setSerifFonts] = useState(null)
  const [sansSerifFonts, setSansSerifFonts] = useState(null)
  const [font1, setFont1] = useState('Prata')
  const [font2, setFont2] = useState('Anybody')

  useEffect(() => {
    getSerifFonts()
  }, [])


  useEffect(() => {

  })

  const getSerifFonts = async () => {
    const data = await apiGenerateFonts.generateAllFonts()
    if (data) {
      console.log("all fonts: ", data)
      let serifData = data.filter(font => font.category === "serif")
      console.log("serif: ", serifData)
      setSerifFonts(serifData)
      let sansSerifData = data.filter(font => font.category === "sans-serif").slice(0, 25)
      setSansSerifFonts(sansSerifData)
    }
  }


  return (
    <div className="generate-palette__container">
      <h2>Create a Font Pair</h2>
      <GenerateFont fonts={serifFonts} font={font1} setFont={setFont1} initialFont="Prata"/>
      <GenerateFont fonts={sansSerifFonts} font={font2} setFont={setFont2} initialFont="Anybody" />
    </div>
    
  )
}

export default CreateFontPair