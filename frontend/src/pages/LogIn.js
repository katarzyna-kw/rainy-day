import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import apiCalls from "../api/apiCalls"
import {validate} from 'react-email-validator'

function LogIn({setUser}) {


  const navigate = useNavigate()
  const [loginError, setLoginError] = useState(false)
  const [blankEmailError, setBlankEmailError] = useState(false)
  const [validEmailError, setValidEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginError(false)
    setBlankEmailError(false)
    setPasswordError(false)
    setValidEmailError(false)
    if (e.target.elements["username"].value === "") {
      setBlankEmailError(true)
    }
    if (e.target.elements["password"].value === "") {
      setPasswordError(true)
    }
    if (!validate(e.target.elements["username"].value)) {
      setValidEmailError(true)
    }
    else {
      let loginData = {
        email: e.target.elements["username"].value,
        password: e.target.elements["password"].value,
      }
  
      console.log("login data: ", loginData)
  
      const data = await apiCalls.login(loginData)
  
      console.log("data", data)
  
      if (data) {
        setUser(data)
        navigate("/")
      } else {
        setLoginError(true)
      }
    }
  }

  return (
    <div className="login__container">
      <h2>Login</h2>
      <form id="login-form" onSubmit={handleLogin} method="POST">
        <label>Email: </label>
        <input type="text" name="username" placeholder="Enter email" />
        {blankEmailError && <p>Must enter email</p>}
        {validEmailError && <p>Must enter valid email</p>}
        <label>Password: </label>
        <input type="text" name="password" placeholder="Enter password" />
        {passwordError && <p>Must enter password</p>}
        <button type="submit">
          Login
        </button>
      </form>
      {loginError && <p>Username and password do not match.</p>}
    </div>
  )
}

export default LogIn