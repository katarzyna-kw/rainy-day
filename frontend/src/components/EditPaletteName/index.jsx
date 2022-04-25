import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import apiCalls from '../../api/apiCalls'

function EditPaletteName({currentPalette, renaming, setRenaming, editNameInView}) {

  const [renameError, setRenameError] =useState(false)

  const handleNameEdit = () => {
    setRenaming(true)
  }

  const editName = async (e) => {
    e.preventDefault()
    let updatedName = {
      name: e.target.elements["new_name"].value,
    }

    const data = await apiCalls.updateColorPaletteById(currentPalette.id, updatedName)
  
    if (data) {
      editNameInView()
      setRenameError(false)
      setRenaming(false)
    }
    else {
      console.log('Error updating.')
      setRenameError(true)
    }
  }

  const cancelEdit = (e) => {
    e.preventDefault()
    setRenaming(false)
    setRenameError(false)
  }

  return (
    <div className='edit__container'>
      {!renaming && 
      <button className="btn rename" onClick={handleNameEdit}>Rename</button>
      }
      {renaming && 
      <div className='form__container form__container--edit'>
        <div className="fields__container">
          <form className="input__container--edit" onSubmit={editName} method="PATCH" >
            <input type="text" name="new_name" className='input'/>
            <button className="btn sml ok">
              <FontAwesomeIcon className="" icon={faCheck} />
            </button>
          </form>
          <button className="btn sml cancel" onClick={cancelEdit}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        {renameError && <div className='feedback--edit'>
          <FontAwesomeIcon className="feedback-icon error icon--error-edit" icon={faExclamationTriangle} />
          <p className='feedback__text'>Cannot be blank</p>
        </div>
        }
      </div>
      }
    </div>
  )
}

export default EditPaletteName