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
  }

  return (
    <div className='edit__container'>
      {!renaming && 
      <button className="btn rename" onClick={handleNameEdit}>Rename</button>
      }
      {renaming && 
      <div className='form__container'>
        <form className="input__container" onSubmit={editName} method="PATCH" >
          <input type="text" name="new_name" />
          <button>save</button>
        </form>
        <button onClick={cancelEdit}>x</button>
        {renameError && <p>Palette name cannot be blank.</p>}
      </div>
      }
    </div>
  )
}

export default EditPaletteName