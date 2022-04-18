import React from 'react'

function HomePage({user}) {

  console.log("user: ", user)

  return (
    <div>
      {user === null  ? <h1>Welcome!</h1> : <h1>Welcome, {user.first_name}! </h1>}
    </div>
  )
}

export default HomePage