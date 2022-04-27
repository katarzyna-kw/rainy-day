import {useState, useRef} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { navData } from "./nav-data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'
import './Navbar.css'
import apiCalls from '../../api/apiCalls';
import { Switch } from "@mui/material";


function Navbar({user, setUser, handleToggle, setTheme}) {

  const menu = useRef(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate()

  const handleLogout = async () => {
    const data = await apiCalls.logout()
    if (data) {
      setUser(null)
      localStorage.clear();
      navigate("/")
    }
  }

  const handleDropdown = () => {
    setDropdownOpen(prev => !prev)
  }

  const closeOpenDropdown = (e) => {
    if (menu.current && dropdownOpen && !menu.current.contains(e.target)) {
      setDropdownOpen(false)
    }
  }

  const handleTheme = (e) => {
    setChecked(e.target.checked);
  }

  const onModeToggle = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  document.addEventListener('mousedown',closeOpenDropdown)

  return (
    <div className="navbar__container">
      <ul className="navbar__list">

        {user && navData.map((item, i) => {
          return item.loggedin ? (
            <div className='nav-link__container' key={i}>
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
                {(item.name === "View My Styles") && <button className='nav--button' onClick={() => setDropdownOpen((prev) => !prev)}><FontAwesomeIcon className="nav--icon" icon={faAngleDown} /></button>}
              </div>
                {(item.links && dropdownOpen) && <div className='embedded-links' ref={menu}>
                  {item.links.map((embedded, i) => (
                    <NavLink to={`${embedded.link}`} key={i} className='embedded' onClick={e => {handleToggle(e); handleDropdown(e)}} >
                    <div className='embedded-link'>
                      {embedded.name}
                    </div>
                  </NavLink>
                  ))}
                </div>}
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
        <div className='loggedin-nav__container'>
          <NavLink to="#" className="navbar__link" onClick={handleLogout}>
            <li className="navbar__list-item">Logout</li>
          </NavLink>
        </div>
        }
                  <Switch
            color='default'
            size="small"
            checked={checked}
            onChange={handleTheme}
            onClick={onModeToggle}
            className="theme-toggle"
          />
      </ul>
    </div>
  )
}

export default Navbar