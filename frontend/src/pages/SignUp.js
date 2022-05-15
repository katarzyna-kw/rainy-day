import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import apiCalls from "../api/apiCalls"
import {validate} from 'react-email-validator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { SpinnerCircular } from 'spinners-react'

function SignUp() {

  const navigate = useNavigate()

  const [error, setError] = useState(false)
  const [validEmailError, setValidEmailError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [loading, setLoading] = useState(false)


  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    setValidEmailError(false)
    setPasswordError(false)
    setNameError(false)
    setError(false)
    if (e.target.elements["first_name"].value === "") {
      setLoading(false)
      setNameError(true)
    }
    if (e.target.elements["password"].value === "") {
      setLoading(false)
      setPasswordError(true)
    } 
    if (!validate(e.target.elements["username"].value)) {
      setLoading(false)
      setValidEmailError(true)
    }
    else {
      let signupData = {
        email: e.target.elements["username"].value,
        password: e.target.elements["password"].value,
        first_name: e.target.elements["first_name"].value
      }
  
      console.log("signup data: ", signupData)
  
      const data = await apiCalls.signup(signupData)
  
      console.log("data: ", data)
  
      if (data) {
        navigate("/login")
      }
      else {
        setLoading(false)
        setError(true)
      }  
    }
  }

  return (
    <section className="section-column">
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp} method="POST" className="form__container form--user-info">
        <div className='form-items'>
          <div className='form-item'>
            <label className='screenreader-only'>First Name: </label>
            <input className={nameError ? 'input--user input--error' : 'input--user'} type="text" name="first_name" placeholder="First name" />
            {nameError && <p className='user-input__error'>Name cannot be blank.</p>}
          </div>
          <div className='form-item'>
            <label className='screenreader-only'>Email: </label>
            <input className={(validEmailError) ? 'input--user input--error' : 'input--user'}  type="text" name="username" placeholder="Email address" />
            {validEmailError && <p className='user-input__error'>Must enter valid email</p>}
          </div>
          <div className='form-item'>
            <label className='screenreader-only'>Password: </label>
            <input className={(validEmailError) ? 'input--user input--error' : 'input--user'} type="password" name="password" placeholder="Password" />
            {passwordError && <p className='user-input__error'>Password cannot be blank.</p>}
          </div>
        </div>

        <button className="btn" type="submit">
          Sign Up
        </button>
      </form> 
      {error && 
        <div className="feedback">
          <FontAwesomeIcon className="feedback-icon error icon--error-edit" icon={faExclamationTriangle} />
          <p className='feedback__text'>There was an error signing up with this email/password.</p>
        </div>
      }
      {loading && <SpinnerCircular color='rgb(105, 109, 109)' secondaryColor='#F2F2F1'/>}
    </section>
  )
}

export default SignUp