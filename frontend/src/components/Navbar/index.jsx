import { useNavigate, NavLink } from 'react-router-dom';
import { navData } from "./nav-data"
import '../../App.css'
import './Navbar.css'

function Navbar() {

  return (
    <div className="navbar__container">
      <ul className="navbar__list">
        {navData.map((item, i) => (
          <NavLink to={`${item.url}`} key={i} className="navbar__link">
            <li className="navbar__list-item" key={item.name}>{item.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  )
}

export default Navbar