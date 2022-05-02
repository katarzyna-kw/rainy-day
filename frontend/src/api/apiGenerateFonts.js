import axios from "axios"
import apiHelpers from "./apiHelpers"

const apiGenerateFonts = {}

const BASE_URL = "https://saved-rainy-day.herokuapp.com"
// const BASE_URL = "http://localhost:8000"

apiGenerateFonts.generateAllFonts = async () => {

  const data = await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/get-fonts`, apiHelpers.getCsrfConfig())
  )
  let updatedData = []
  if (data.items.length >= 200) {
    updatedData = [...data.items].splice(0, 200)
  } else {
    updatedData = [...data.items]
  }
  return updatedData
}


export default apiGenerateFonts