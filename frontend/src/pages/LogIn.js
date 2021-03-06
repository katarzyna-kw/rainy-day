import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import apiCalls from "../api/apiCalls"
import {validate} from 'react-email-validator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { SpinnerCircular } from 'spinners-react'

function LogIn({setUser, user}) {


  const navigate = useNavigate()
  const [loginError, setLoginError] = useState(false)
  const [validEmailError, setValidEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setLoginError(false)
    setPasswordError(false)
    setValidEmailError(false)
    if (e.target.elements["password"].value === "") {
      setLoading(false)
      setPasswordError(true)
    }
    if (!validate(e.target.elements["username"].value)) {
      setLoading(false)
      setValidEmailError(true)
    }
    else {
      let loginData = {
        email: e.target.elements["username"].value,
        password: e.target.elements["password"].value,
      }
    
      const data = await apiCalls.login(loginData)
    
      if (data) {
        console.log("data.token: ", data.token)
        setUser(data)
        localStorage.setItem("user", JSON.stringify(data))
        localStorage.setItem("token", data.token)
        navigate("/")
      } else {
        setLoading(false)
        setLoginError(true)
      }
    }
  }

  return (
    <section className="section-column">
      <h2>Login</h2>
      <form id="login-form" onSubmit={handleLogin} method="POST" className="form__container form--user-info">
      <div className='form-items'>
          <div className='form-item'>
            <label className='screenreader-only'>Email: </label>
            <input className={validEmailError ? 'input--user input--error' : 'input--user'} type="text" name="username" placeholder="Enter email" />
            {validEmailError && <p className='user-input__error'>Must enter valid email</p>}
          </div>
          <div className='form-item'>
          <label className='screenreader-only'>Password: </label>
          <input className={passwordError ? 'input--user input--error' : 'input--user'} type="password" name="password" placeholder="Enter password" />
          {passwordError && <p className='user-input__error'>Must enter password</p>}
        </div>
      </div>
      <button className="btn" type="submit">
        Login
      </button>
    </form>
    {loginError && 
    <div className="feedback">
      <FontAwesomeIcon className="feedback-icon error icon--error-edit" icon={faExclamationTriangle} />
      <p className='feedback__text'>Username and password do not match.</p>
    </div>}
    {loading && <SpinnerCircular color='rgb(105, 109, 109)' secondaryColor='#F2F2F1'/>}
    </section>
  )
}

export default LogIn