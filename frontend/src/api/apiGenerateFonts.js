import axios from "axios"
import apiHelpers from "./apiHelpers"

const apiGenerateFonts = {}

const fontEndpoint=process.env.REACT_APP_FONT_ENDPOINT
const fontKey=process.env.REACT_APP_API_KEY

apiGeneratePalettes.generateAllFonts = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${fontEndpoint}${fontKey}`))
}