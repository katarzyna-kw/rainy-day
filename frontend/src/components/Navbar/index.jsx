import { NavLink, useNavigate } from 'react-router-dom';
import { navData } from "./nav-data"
import '../../App.css'
import './Navbar.css'
import apiCalls from '../../api/apiCalls';

function Navbar({user, setUser, handleToggle}) {

  

  const navigate = useNavigate()

  const handleLogout = async () => {
    const data = await apiCalls.logout()
    if (data) {
      setUser(null)
      navigate("/")
    }
  }

  return (
    <div className="navbar__container">
      <ul className="navbar__list">

        {user && navData.map((item, i) => {
          return item.loggedin ? (
            <NavLink to={`${item.url}`} key={i} className="navbar__link" onClick={handleToggle}>
            <li className="navbar__list-item">{item.name}</li>
          </NavLink>
            ) : null;
          })}

        {!user && navData.map((item, i) => {
          return !item.loggedin ? (
            <NavLink to={`${item.url}`} key={i} className="navbar__link" onClick={handleToggle}>
            <li className="navbar__list-item">{item.name}</li>
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