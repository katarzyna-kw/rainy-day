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
          <button className='save-btn' onClick={() => addNeutralToPalette(neutral)}>
            save palette with {adjective} neutral
          </button>
          <button onClick={cancelEdit}>x</button>
        </div>
      }
      {neutralError && <p>Error saving palette. Try again.</p>}
    </div>
  )
}

export default EditPaletteColor