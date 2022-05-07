import Cookie from "js-cookie"

const apiHelpers = {}

apiHelpers.getCsrfConfig = () => {
  return {
    // withCredentials: true, // this needs to be done for the separate project setup,
    // headers: {
    //   'X-CSRFToken': Cookie.get("csrftoken")
    // }
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}

// headers: { Authorization:  `Bearer ${JSON.parse(accessToken)}` },


apiHelpers.tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall()
    return response.data ? response.data : {message: "success"}
  }
  catch (e) {
    console.error("error: ", e.response ? e.response.data : e)
    return null
  }
}

export default apiHelpers