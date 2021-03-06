import apiCalls from "../../api/apiCalls"

function DeletePalette({currentPalette, removePaletteFromView}) {

  const handleDeletePalette = async () => {
    let warning = window.confirm(`Are you sure you want to delete ${currentPalette.name}?`)
    if (warning) {
      let data = await apiCalls.deleteColorPaletteById(currentPalette.id)
      // console.log("data: ", data)
      if (data) {
        removePaletteFromView(currentPalette.id)
      }
    }
  }

  return (
    <button className="btn delete" onClick={handleDeletePalette}>Delete</button>
    )
}

export default DeletePalette