import axios from "axios"
import apiHelpers from "./apiHelpers"

const apiGenerateFonts = {}

const fontEndpoint=process.env.REACT_APP_FONT_ENDPOINT
const fontKey=process.env.REACT_APP_API_KEY

apiGenerateFonts.generateAllFonts = async () => {

  const data = await apiHelpers.tryCatchFetch(
    () => axios.get(`${fontEndpoint}${fontKey}&sort=popularity`)
  )
  let updatedData = []
  if (data.items.length >= 155) {
    updatedData = [...data.items].splice(0, 154)
  } else {
    updatedData = [...data.items]
  }
  return updatedData
}

export default apiGenerateFonts