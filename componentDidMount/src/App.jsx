// Mini Project # 20 : componentDidMount
// Task : Fetch Users Once
// * On mount, fetch user data (like https://jsonplaceholder.typicode.com/users) and show it.

import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log("Error fetching users:", error))
    //.then chains work like a sequence of steps, each waiting for the previous one to finish.
  }, [])

  return (
    <>
      <h1>User Lists</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App