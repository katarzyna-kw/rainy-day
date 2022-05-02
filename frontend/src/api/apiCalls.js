import axios from "axios"
import apiHelpers from "./apiHelpers"

const apiCalls = {}
const BASE_URL = "https://saved-rainy-day.herokuapp.com"
// const BASE_URL = "http://localhost:8000"

apiCalls.signup = async (signupData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/users/`, signupData, apiHelpers.getCsrfConfig())
  )
}

apiCalls.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/login/`, loginData, apiHelpers.getCsrfConfig())
  )
}

apiCalls.logout = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/logout/`, null, apiHelpers.getCsrfConfig()))
}


apiCalls.getAllColorPalettes = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/colors/`, apiHelpers.getCsrfConfig())
  )
}

apiCalls.createColorPalette = async (paletteData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/colors/`, paletteData, apiHelpers.getCsrfConfig()))
}

apiCalls.getColorPaletteById = async (colorPaletteId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/colors/${colorPaletteId}/`, apiHelpers.getCsrfConfig()))
}

apiCalls.updateColorPaletteById = async (colorPaletteId, newData) => {
  console.log("csrf: ", apiHelpers.getCsrfConfig())
  return await apiHelpers.tryCatchFetch(
    () => axios.patch(`${BASE_URL}/colors/${colorPaletteId}/`, newData, apiHelpers.getCsrfConfig()))
}

apiCalls.deleteColorPaletteById = async (colorPaletteId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.delete(`${BASE_URL}/colors/${colorPaletteId}/`, apiHelpers.getCsrfConfig()))
}

apiCalls.getAllFontPairs = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/font-pairs/`, apiHelpers.getCsrfConfig())
    )
}

apiCalls.createFontPair = async (fontPairData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/font-pairs/`, fontPairData, apiHelpers.getCsrfConfig()))
}

apiCalls.getFontPairById = async (fontPairId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/font-pairs/${fontPairId}/`, apiHelpers.getCsrfConfig()))
}

apiCalls.updateFontPairById = async (fontPairId, newData) => {
  console.log("csrf: ", apiHelpers.getCsrfConfig())
  return await apiHelpers.tryCatchFetch(
    () => axios.patch(`${BASE_URL}/font-pairs/${fontPairId}/`, newData, apiHelpers.getCsrfConfig()))
}

apiCalls.deleteFontPairById = async (fontPairId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.delete(`${BASE_URL}/font-pairs/${fontPairId}/`, apiHelpers.getCsrfConfig()))
}


export default apiCalls