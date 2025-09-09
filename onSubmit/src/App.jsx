// Mini Project # 16 : Login Form (onSubmit)
// * Create a form with username and password fields.
// * On submit, prevent page refresh and log the entered data to the console.

import './App.css'
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);

  }
  return (
    <>

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button>Submit</button>
      </form>

    </>
  )
}

export default App