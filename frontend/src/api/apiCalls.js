import axios from "axios"
import apiHelpers from "./apiHelpers"

const apiCalls = {}
const BASE_URL = "http://localhost:8000"

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
  console.log("in create color palette")
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/colors/`, paletteData, apiHelpers.getCsrfConfig()))
}

apiCalls.getColorPaletteById = async (colorPaletteId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/colors/${colorPaletteId}/`, apiHelpers.getCsrfConfig()))
}

// PUT to the detail view => update one
// PATCH to the detail view => partial up date one
apiCalls.updateColorPaletteById = async (colorPaletteId) => {
  console.log("csrf: ", apiHelpers.getCsrfConfig())
  return await apiHelpers.tryCatchFetch(
    () => axios.patch(`${BASE_URL}/colors/${colorPaletteId}/`, apiHelpers.getCsrfConfig()))
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

// PUT to the detail view => update one
// PATCH to the detail view => partial up date one
apiCalls.updateFontPairById = async (fontPairId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.put(`${BASE_URL}/font-pairs/${fontPairId}/`, apiHelpers.getCsrfConfig()))
}

apiCalls.deleteFontPairById = async (fontPairId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.delete(`${BASE_URL}/font-pairs/${fontPairId}/`, apiHelpers.getCsrfConfig()))
}

export default apiCalls