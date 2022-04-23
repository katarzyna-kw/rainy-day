import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import apiCalls from "../api/apiCalls"
import {validate} from 'react-email-validator'

function SignUp() {

  const navigate = useNavigate()

  const [error, setError] = useState(false)
  const [blankEmailError, setBlankEmailError] = useState(false)
  const [validEmailError, setValidEmailError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)


  const handleSignUp = async (e) => {
    e.preventDefault()
    setBlankEmailError(false)
    setValidEmailError(false)
    setPasswordError(false)
    setNameError(false)
    if (e.target.elements["username"].value === "") {
      setBlankEmailError(true)
    }
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
      <form onSubmit={handleSignUp} method="POST">
      <label>First Name: </label>
        <input type="text" name="first_name" placeholder="Enter first name" />
        {nameError && <p>Name cannot be blank.</p>}
        <label>Email: </label>
        <input type="text" name="username" placeholder="Enter email" />
        {blankEmailError && <p>Email cannot be blank.</p>}
        {validEmailError && <p>Must enter valid email</p>}
        <label>Password: </label>
        <input type="text" name="password" placeholder="Enter password" />
        {passwordError && <p>Password cannot be blank.</p>}
        <button type="submit">
          Sign Up
        </button>
      </form> 
      {error && <p>Try to log in to see if user already exists.</p>}
    </section>
  )
}

export default SignUp