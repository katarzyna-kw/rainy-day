import Cookie from "js-cookie"

const apiHelpers = {}

apiHelpers.getCsrfConfig = () => {
  return {
    withCredentials: true, // this needs to be done for the separate project setup
    headers: {
      'X-CSRFToken': Cookie.get("csrftoken")
    }
  }
}

apiHelpers.tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall()
    // console.log("response.data: ", response.data)
    return response.data ? response.data : {message: "success"}
  }
  catch (e) {
    console.error("error: ", e.response ? e.response.data : e)
    return null
  }
}

export default apiHelpers