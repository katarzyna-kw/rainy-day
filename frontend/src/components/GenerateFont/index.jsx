import FontOutput from '../FontOutput'

function GenerateFont({fonts, font, setFont, initialFont}) {


  const handleSelect = (e) => {
    setFont(e.target.value)
  }

  return (
    <div className="generate-font__container">
      <label htmlFor="font1">
        <select className='selector--font' name="font1" onChange={handleSelect}>
          <option value={initialFont}>{initialFont}</option>
          {fonts && fonts.map((ft, i) => (
            <option key={i} value={ft.family}>{ft.family}</option>
          ))}
        </select>
      </label>
      <div className='display__container'>
        <FontOutput font={font} />
      </div>
    </div>
  )
}

export default GenerateFont