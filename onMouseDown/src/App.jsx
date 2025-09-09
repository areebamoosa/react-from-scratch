// Mini Project # 15 : onMouseDown
// Task : Press and Hold Button
// * A button that changes color only while you hold it down.

import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {

  const [isHeld, setHeld] = useState(false)

  return (
    <>
      <Button onMouseDown={() => setHeld(true)} onMouseUp={() => setHeld(false)} isHeld={isHeld} />
    </>
  )
}

export default App