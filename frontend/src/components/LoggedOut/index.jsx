import {Link} from 'react-router-dom'
import createPalette from '../../assets/palette.gif'
import createPair from '../../assets/font-pair.gif'
import './LoggedOut.css'

function LoggedOut() {
  return (
    <div className="loggedout">
    <div className="demo__text--container">
      <h2 className="demo__text para1">Never run out of styling ideas - <span>save them for a rainy day</span>!</h2>
      <h2 className='demo__text para2 desktop'>
        <span>Create</span>, edit, and <span>save</span> unlimited color palettes and unlimited Google font pairings in one <span>convenient</span> space for <span>free</span>
      </h2>
      <Link className="desktop" to="/signup">
      <button className='btn btn-landing'>Sign up today!</button>
    </Link>
    </div>
    <div className="demo__visual">
      <img className="demo--gif gif-colors" src={createPalette} />
      <img className="demo--gif gif-fonts" src={createPair} />
    </div>
    <div className="demo__text--container mobile">
      <h2 className="demo__text para2 mobile--text"><span>Create</span>, edit, and <span>save</span> unlimited color palettes and <span>unlimited</span> Google font pairings in one <span>convenient</span> space for <span>free</span></h2>
    </div>
    <Link className="mobile" to="/signup">
      <button className='btn btn-landing'>Sign up today!</button>
    </Link>
  </div>
  )
}

export default LoggedOut