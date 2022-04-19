import React from 'react'

function FontPairGenerator() {
  return (
    <div className="generate-palette__container">
      Create a Font Pair
      <label htmlFor="font1">
        <select className='selector--font' name="font1">
          Choices here
        </select>
      </label>
    </div>
  )
}

export default FontPairGenerator