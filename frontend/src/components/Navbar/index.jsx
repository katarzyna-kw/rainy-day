import {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { navData } from "./nav-data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'
import './Navbar.css'
import apiCalls from '../../api/apiCalls';

function Navbar({user, setUser, handleToggle}) {

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    const data = await apiCalls.logout()
    if (data) {
      setUser(null)
      navigate("/")
    }
  }

  const handleDropdown = () => {
    setDropdownOpen(prev => !prev)
  }

  return (
    <div className="navbar__container">
      <ul className="navbar__list">

        {user && navData.map((item, i) => {
          return item.loggedin ? (
            <div className='nav-link__container'>
              <div className='nav-link--item'>
                {item.url && <NavLink to={`${item.url}`} key={i} className="navbar__link" onClick={handleToggle}>
                  <li className="navbar__list-item">
                    {item.name}
                  </li>
                </NavLink>
                }
                {!item.url && <div className="navbar__link">
                  <li className='navbar__list-item' onClick={handleDropdown}>
                    {item.name}
                  </li>
                </div>}
                {item.name === "View My Styles" && <button className='nav--button' onClick={handleDropdown}><FontAwesomeIcon className="nav--icon" icon={faAngleDown} /></button>}
              </div>
              {(item.links && dropdownOpen) && item.links.map((embedded, i) => (
                <NavLink to={`${embedded.link}`} key={i} className='embedded-links' onClick={e => {handleToggle(e); handleDropdown(e)}} >
                  <div className='embedded-links'>
                    {embedded.name}
                  </div>
                </NavLink>
              ))}
            </div>
            ) : null;
          })}

        {!user && navData.map((item, i) => {
          return !item.loggedin ? (
            <NavLink to={`${item.url}`} key={i} className="navbar__link" onClick={handleToggle}>
            <li className="navbar__list-item">
              {item.name}
            </li>
          </NavLink>
            ) : null;
          })}

        {user && 
        <NavLink to="#" className="navbar__link" onClick={handleLogout}>
          <li className="navbar__list-item">Logout</li>
        </NavLink>
        }
      </ul>
    </div>
  )
}

export default Navbar