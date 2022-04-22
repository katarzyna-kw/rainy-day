import {Link} from 'react-router-dom'
import DeletePair from '../DeletePair'
import FontOutput from '../FontOutput'

function ShowFontPair({currentPair, removePairFromView}) {

  console.log("current pair in ShowFP: ", currentPair)

  return (
    <div className="show-font-pair__container">
      <h2>{currentPair.font1}/{currentPair.font2}</h2>
      {currentPair.fonts.map((font, i) => (
        <FontOutput key={i} font={font} removePairFromView={removePairFromView} />
      ))}
      <DeletePair currentPair={currentPair} removePairFromView={removePairFromView} />
      <Link to={`/edit-font-pair/:${currentPair.id}`} state={currentPair}>
        <button>Edit {currentPair.font1}/{currentPair.font2}</button>
      </Link>
    </div>
  )
}

export default ShowFontPair