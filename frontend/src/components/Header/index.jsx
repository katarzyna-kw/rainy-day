import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import logo from '../../assets/rainy-bw.png'

function Header({user, setUser}) {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const isMobile = width < 700 ? true : false;

  useEffect (() => {
    const updateWindow = () => {
      setWidth(window.innerWidth)
    };

    window.addEventListener("resize", updateWindow)

    return () => window.removeEventListener("resize", updateWindow)
  }, [])


  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return (
    <div className="header__container">
      <div className="header__head">
        <div className="logo__container">
          <Link to="/" className="logo">
            {/* <img className="logo-img" src={logo} /> */}
            saved for a rainy day
          </Link>
        </div>
        {isMobile && 
          <button className="toggler__container" aria-controls="navbarDropdown" onClick={handleToggle}>
            {navbarOpen 
              ? <FontAwesomeIcon className="toggler bars" icon={faXmark} /> 
              : <FontAwesomeIcon className="toggler x" icon={faBars} />
            }
          </button>
        }
        {!isMobile && <Navbar mobile={isMobile} user={user} setUser={setUser} handleToggle={handleToggle}/> }
      </div>
      {navbarOpen && isMobile && <Navbar user={user} setUser={setUser} handleToggle={handleToggle}/> }
    </div>
  )
}

export default Header