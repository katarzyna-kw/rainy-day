import { useState, useEffect } from 'react'
import apiCalls from '../../api/apiCalls'

function EditPaletteName({currentPalette, renaming, setRenaming, editNameInView}) {

  const handleNameEdit = () => {
    setRenaming(true)
  }

  const editName = async (e) => {
    e.preventDefault()
    let updatedName = {
      name: e.target.elements["new_name"].value,
    }

    console.log("updated name: ", updatedName)

    const data = await apiCalls.updateColorPaletteById(currentPalette.id, updatedName)

    console.log("data from api call: ", data)
  
    if (data) {
      editNameInView()
      console.log("current palette stil shows old name: ", currentPalette)
    }
    else {
      console.log('Error updating.')
    }
  }

  return (
    <div className='edit__container'>
      <button onClick={handleNameEdit}>Rename {currentPalette.name} palette</button>
      {renaming && 
      <form className="input__container" onSubmit={editName} method="PATCH" >
        <input type="text" name="new_name" />
        <button>save</button>
      </form>
      }
    </div>
  )
}

export default EditPaletteName