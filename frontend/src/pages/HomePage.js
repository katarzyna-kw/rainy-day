import LoggedIn from '../components/LoggedIn'
import LoggedOut from "../components/LoggedOut"

function HomePage({user}) {

  return (
    <section className="section-column">
      {user && <h1 className="hp--welcome">Welcome, {user.first_name}! </h1>}
      {!user && <LoggedOut />}
      {user && <LoggedIn user={user} />
      }
    </section>
  )
}

export default HomePage