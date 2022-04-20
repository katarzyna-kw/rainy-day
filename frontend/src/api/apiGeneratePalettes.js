import axios from "axios"
import apiHelpers from "./apiHelpers"

const apiGeneratePalettes = {}
const BASE_URL = "https://www.thecolorapi.com/scheme?hex="

apiGeneratePalettes.generateContrastingPalette = async (color) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}${color}&mode=quad&count=4`))
}

apiGeneratePalettes.generateAnalogicPalette = async (color) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}${color}&mode=analogic&count=4`))
}

apiGeneratePalettes.generateComplementaryPalette = async (color) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}${color}&mode=analogic-complement&count=3`))
}

apiGeneratePalettes.generateNeutral = async (color) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}${color}&mode=analogic-complement&count=3`))
}


export default apiGeneratePalettes