/* global fetch */
import React, { Component } from 'react'
import UserList from './UserList'

// Façon habituelle d'écrire un composant React
class App extends Component {
  constructor (props) {
    super(props)
    this.handleGenerateClick = this.handleGenerateClick.bind(this)
    this.state = {
      users: []
    }
  }
  handleGenerateClick () {
    fetch('https://api.randomuser.me')
      .then(res => res.json())
      .then(parsedResult => {
        const data = parsedResult.results[0]
        const newUser = {
          gender: data.gender,
          firstname: data.name.first,
          lastname: data.name.last,
          city: data.location.city,
          nationality: data.nat,
          picture: data.picture.medium
        }
        const { users } = this.state
        const newUsers = [...users]
        newUsers.push(newUser)
        this.setState({
          users: newUsers
        })
      })
  }
  render () {
    return (
      <div>
        <button onClick={this.handleGenerateClick}>Generate random user</button>
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export default App
