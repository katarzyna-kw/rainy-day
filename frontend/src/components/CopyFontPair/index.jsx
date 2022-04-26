import React from 'react'

function CopyFontPair({currentPair}) {
  const copyArrayToClipboard = () => {

    let fontArray = []
    fontArray.push(currentPair.font1)
    fontArray.push(currentPair.font2)
    console.log("font array: ", fontArray)
  }

  return (
    <div className='btn__container'>
      <button onClick={copyArrayToClipboard}>Copy Array to Export to Project</button>
    </div>
  )
}

export default CopyFontPair