import FontOutput from '../FontOutput'
import './GenerateFont.css'

function GenerateFont({fonts, font, setFont, initialFont, num}) {


  const handleSelect = (e) => {
    setFont(e.target.value)
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
        <FontOutput font={font} />
      </div>
    </div>
  )
}

export default GenerateFont