import React from 'react'
import UserProfile from './UserProfile'

class PostList extends React.Component {
  render () {
    const { users } = this.props
    return (
      <div>
        { users.map(user => <UserProfile user={user} />) }
      </div>
    )
  }
}

export default PostList