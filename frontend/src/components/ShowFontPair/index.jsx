import {Link} from 'react-router-dom'
import DeletePair from '../DeletePair'
import FontOutput from '../FontOutput'
import './ShowFontPair.css'

function ShowFontPair({currentPair, removePairFromView}) {

  return (
    <div className="view-font-pair__container">
      <h3 className='view-font-pair__heading'>{currentPair.font1}/{currentPair.font2}</h3>
      {currentPair.fonts.map((font, i) => (
        <FontOutput key={i} font={font} removePairFromView={removePairFromView} />
      ))}
      <div className='btns__container'>
        <div className='btn--external-links'>
          <a href={`https://fonts.google.com/specimen/${currentPair.font1}`} target="_blank" rel="noreferrer">
            <button className='btn btn--tertiary'>
              {currentPair.font1} on Google Fonts
            </button>
          </a>
          <a href={`https://fonts.google.com/specimen/${currentPair.font2}`} target="_blank" rel="noreferrer">
            <button className='btn btn--tertiary'>
              {currentPair.font2} on Google Fonts
            </button>
          </a>
        </div>
        <div className='btn--internal-links'>
          <Link to={`/edit-font-pair/${currentPair.id}`} state={currentPair}>
            <button className='btn rename'>Edit</button>
          </Link>
          <DeletePair currentPair={currentPair} removePairFromView={removePairFromView} />
        </div>
      </div>
    </div>
  )
}

export default ShowFontPair