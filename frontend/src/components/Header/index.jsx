import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function Header() {

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
            Save it for a rainy day
          </Link>
        </div>
        {isMobile && 
          <button className="toggler__container" aria-controls="navbarDropdown" onClick={handleToggle}>
            {navbarOpen 
              ? <FontAwesomeIcon className="toggler bars" icon={faX} /> 
              : <FontAwesomeIcon className="toggler x" icon={faBars} />
            }
          </button>
        }
        {!isMobile && <Navbar mobile={isMobile}/>}
      </div>
      {navbarOpen && isMobile && <Navbar /> }
    </div>
  )
}

export default Header