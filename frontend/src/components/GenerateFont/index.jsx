import React, { useEffect } from 'react'
import WebFont from 'webfontloader'

function GenerateFont({fonts, font, setFont, initialFont}) {

  useEffect(() => {
    WebFont.load({
      google: {
        families: [`${font}`]
      }
    })

  }, [font])

  const handleSelect = (e) => {
    console.log("e target val: ", e.target.value)
    setFont(e.target.value)
    console.log("new font after handle/set: ", font)
  }

  return (
    <div className="generate-font__container">
      <label htmlFor="font1">
        <select className='selector--font' name="font1" onClick={handleSelect}>
          <option value={initialFont}>{initialFont}</option>
          {fonts && fonts.map((ft, i) => (
            <option key={i} value={ft.family}>{ft.family}</option>
          ))}
        </select>
      </label>
      <div className='display__container'>
        <h3 style={{fontFamily: `${font}`}}>The brown dog jumped over the gray fox.</h3>
        <h3 style={{fontFamily: `${font}`}}>THE BROWN DOG JUMPED OVER THE GRAY FOX.</h3>
      </div>
    </div>
  )
}

export default GenerateFont