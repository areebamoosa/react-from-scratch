// Mini Project # 12 useContext
// Task : User Profile (Context)
// * Store user details in context (name, email).
// * Display user info in multiple components without props drilling.

import './App.css'
import { createContext } from 'react'
import UserName from './Components/Username';
import Email from './Components/Email';

export const UserContext = createContext();

function App() {
  return (
    <>
      <UserContext.Provider value={{ name: "Ayra", email: "ayrakhan@gmail.com" }}>
        <UserName />
        <Email />
      </UserContext.Provider>
    </>
  )
}

export default App