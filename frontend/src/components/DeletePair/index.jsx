import apiCalls from "../../api/apiCalls"

function DeletePair({currentPair, removePairFromView}) {

  const handleDeletePair = async () => {
    let warning = window.confirm(`Are you sure you want to delete ${currentPair.font1}/${currentPair.font2}?`)
    if (warning) {
      let data = await apiCalls.deleteFontPairById(currentPair.id)
      if (data) {
        removePairFromView(currentPair.id)
      }
    }
  }

  return (
    <button onClick={handleDeletePair} className="btn delete">
      Delete {currentPair.font1}/{currentPair.font2}
    </button>
  )
}

export default DeletePair