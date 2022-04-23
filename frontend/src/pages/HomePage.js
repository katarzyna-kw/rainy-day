function HomePage({user}) {

  return (
    <section>
      {user === null  ? <h1>Welcome!</h1> : <h1>Welcome, {user.first_name}! </h1>}
    </section>
  )
}

export default HomePage