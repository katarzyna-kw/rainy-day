import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

function EditPaletteColor({neutral, neutralSet, addNeutralToPalette, isSaved, setIsSaved, neutralError, adjective}) {

  const cancelEdit = (e) => {
    e.preventDefault()
    neutralSet(false)
    setIsSaved(false)
  }


  return (
    <div className='edit__container'>
      {neutral && !isSaved &&
        <div className='btn__container'>
          <button className='save-btn add' onClick={() => addNeutralToPalette(neutral)}>
            save {adjective} neutral to palette
          </button>
          <button className="btn sml cancel" onClick={cancelEdit}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      }
      {neutralError && <div className='feedback--edit'>
          <FontAwesomeIcon className="feedback-icon error icon--error-edit" icon={faExclamationTriangle} />
          <p className='feedback__text feedback__text--error'>Error saving palette. Try again.</p>
        </div>
      }
    </div>
  )
}

export default EditPaletteColor