import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import apiCalls from "../api/apiCalls"
import {validate} from 'react-email-validator'

function SignUp() {

  const navigate = useNavigate()

  const [error, setError] = useState(false)
  const [validEmailError, setValidEmailError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)


  const handleSignUp = async (e) => {
    e.preventDefault()
    setValidEmailError(false)
    setPasswordError(false)
    setNameError(false)
    if (e.target.elements["first_name"].value === "") {
      setNameError(true)
    }
    if (e.target.elements["password"].value === "") {
      setPasswordError(true)
    } 
    if (!validate(e.target.elements["username"].value)) {
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
      {error && <p>Try to log in to see if user already exists.</p>}
    </section>
  )
}

export default SignUp