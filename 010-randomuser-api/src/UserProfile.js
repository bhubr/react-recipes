import React from 'react'

class UserProfile extends React.Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <h3>{user.firstname} {user.lastname}</h3>
        <img src={user.picture} alt={ user.firstname + "'s picture" } />
        <p>{user.firstname} {user.lastname} lives in {user.city}, {user.nationality}</p>
      </div>
    )
  }
}

export default UserProfile