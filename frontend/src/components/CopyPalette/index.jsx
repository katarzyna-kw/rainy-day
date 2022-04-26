import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import './CopyPalette.css'
function CopyPalette({currentPalette}) {

  return (
    <div className='btn__container'>
      <button className="btn btn--tertiary copy" onClick={() => {navigator.clipboard.writeText(currentPalette.colors)}}>
        Copy Colors to Clipboard
        <FontAwesomeIcon className="icon--copy" icon={faCopy} />
      </button>
    </div>
  )
}

export default CopyPalette