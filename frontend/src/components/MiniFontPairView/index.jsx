import FontOutput from "../FontOutput"
import './MiniFontPairView.css'

function MiniFontPairView({currentPair}) {
  return (
    <div className="mini-font-pair__container">
      <h3 className='mini-font-pair__header'>{currentPair ? currentPair.font1 : "Unavailable"}/{currentPair ? currentPair.font2 : "Unavailable"}</h3>
      {(currentPair) ? currentPair.fonts.map((font, i) => (
        <FontOutput key={i} font={font} />
      )) : null}
    </div>
  )
}

export default MiniFontPairView