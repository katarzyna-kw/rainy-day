import React from 'react'
import DeletePair from '../DeletePair'
import FontOutput from '../FontOutput'

function ShowFontPair({currentPair, i, removePairFromView}) {

  console.log("pair in show fp: ", currentPair)

  return (
    <div className="show-font-pair__container">
      <h2>Pair {i}</h2>
      <FontOutput font={currentPair.font1} />
      <FontOutput font={currentPair.font2} />
      <DeletePair currentPair={currentPair} i={i} removePairFromView={removePairFromView} />

    </div>
  )
}

export default ShowFontPair