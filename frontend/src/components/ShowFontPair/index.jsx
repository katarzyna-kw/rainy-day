import {Link} from 'react-router-dom'
import DeletePair from '../DeletePair'
import FontOutput from '../FontOutput'
import './ShowFontPair.css'

function ShowFontPair({currentPair, removePairFromView}) {

  console.log("current pair in ShowFP: ", currentPair)

  return (
    <div className="view-font-pair__container">
      <h3>{currentPair.font1}/{currentPair.font2}</h3>
      {currentPair.fonts.map((font, i) => (
        <FontOutput key={i} font={font} removePairFromView={removePairFromView} />
      ))}
      <div className='btn__container'>
        <Link to={`/edit-font-pair/${currentPair.id}`} state={currentPair}>
          <button className='btn rename'>Edit {currentPair.font1}/{currentPair.font2}</button>
        </Link>
        <DeletePair currentPair={currentPair} removePairFromView={removePairFromView} />
      </div>
    </div>
  )
}

export default ShowFontPair