import {useState} from 'react'
import FontOutput from '../FontOutput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import './GenerateFont.css'

function GenerateFont({fonts, font, setFont, initialFont, num}) {

  const [bgColor, setBgColor] = useState('#F2F2F1')
  const [fontColor, setFontColor] = useState('#000000')

  const handleSelect = (e) => {
    setFont(e.target.value)
  }

  const handleHover = (color) => {
    if (color==="#111211") {
      setFontColor("#FFFFFF")
    } else {
      setFontColor("#000000")
    }
    setBgColor(color)
  }

  return (
    <div className="generate-font__container">
      <div className='input__container'>
        <label htmlFor="font">Choose Font {num}:</label>
        <select className='selector--font' name="font" onChange={handleSelect}>
          <option value={initialFont}>{initialFont}</option>
          {fonts && fonts.map((ft, i) => (
            <option key={i} value={ft.family}>{ft.family}</option>
          ))}
        </select>
      </div>
      <div className='display__container'>
        <FontOutput font={font} bgColor={bgColor} fontColor={fontColor} />
        <div className='display--colors'>
          <FontAwesomeIcon className="circle gray" icon={faCircle} onClick={() => handleHover('#F2F2F1')}/>
          <FontAwesomeIcon className="circle yellow" icon={faCircle} onClick={() => handleHover('#F1E766')}/>
          <FontAwesomeIcon className="circle black" icon={faCircle} onClick={() => handleHover('#111211')}/>
        </div>
      </div>
    </div>
  )
}

export default GenerateFont