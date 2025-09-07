// Mini Project # 10 : useRef
// Task : Focus Input
// * Input field + button.
// * On button click → focus the input using useRef.

import { useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  )
}

export default App