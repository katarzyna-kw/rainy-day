import axios from "axios"
import apiHelpers from "./apiHelpers"

const apiGeneratePalettes = {}
const BASE_URL = "https://www.thecolorapi.com/scheme?hex="
const SINGLE_URL = "https://www.thecolorapi.com/id?hex="
const HSL_URL = "https://www.thecolorapi.com/id?hsl="

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
  if (color==='FFFFFF') {
    return await apiHelpers.tryCatchFetch(
      () => axios.get(`${BASE_URL}${color}&mode=analogic&count=10`))  
  }
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}${color}&mode=monochrome-dark&count=10`))
}

apiGeneratePalettes.getSingleColor = async (color) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${SINGLE_URL}${color}`)
  )
}

apiGeneratePalettes.getSingleColorByHSL = async (color) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${HSL_URL}${color}`)
  )
}


export default apiGeneratePalettes