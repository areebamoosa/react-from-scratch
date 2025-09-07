// Mini Project # 8 : useState
// Task : Like Button
// * Clicking a button toggles between “👍 Liked” and “Like”.
// * Track state with useState.

import { useState } from 'react'
import Button from './Components/Button'
import './App.css'

function App() {

  const [like, setLike] = useState("Like")

  function handleLike() {
    setLike(prev => prev === "Like" ? "👍 Liked" : "Like")
  }

  return (
    <>
      <Button onClick={handleLike} text={like} />
    </>
  )
}

export default App