// Mini Project # 30 : Color Picker 
// * Make a list of colored buttons (e.g., Red, Blue, Green, Yellow).
// * When you click a button, the background of a box changes to that color.
// * Use useState to store the current color.

import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("white");

  return (
    <>
      <div style={{ backgroundColor: color, width: "200px", height: "200px" }}></div>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>

    </>
  )
}

export default App