import apiCalls from "../../api/apiCalls"

function DeletePair({currentPair, i, removePairFromView}) {

  const handleDeletePair = async () => {
    let warning = window.confirm(`Are you sure you want to delete Font Pair ${i}?`)
    if (warning) {
      let data = await apiCalls.deleteFontPairById(currentPair.id)
      console.log("data: ", data)
      if (data) {
        removePairFromView(currentPair.id)
      }
    }
  }

  return (
    <button onClick={handleDeletePair}>Delete Font Pair {i}</button>
  )
}

export default DeletePair