// Mini Project # 14 : onClickCapture
// Task: Click Tracker (with visible messages in browser)

import { useState } from 'react'
import './App.css'

function App() {
  const [log, setLog] = useState([])

  const addLog = (msg) => {
    setLog((prev) => [...prev, msg])
  }

  return (
    <>
      <div
        style={{
          padding: "40px",
          border: "2px solid blue",
          backgroundColor: "#e0f7ff",
          marginBottom: "20px",
        }}
        onClick={() => addLog("Outer Div - Bubbling")}
        onClickCapture={() => addLog("Outer Div - Capturing")}
      >
        Outer Div
        <div
          style={{
            padding: "20px",
            border: "2px solid green",
            backgroundColor: "#eaffea",
            marginTop: "10px",
          }}
          onClick={() => addLog("Inner Div - Bubbling")}
          onClickCapture={() => addLog("Inner Div - Capturing")}
        >
          Inner Div
        </div>


      </div>

      <h3>Click Logs</h3>
      <ul>
        {log.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </>
  )
}

export default App

// Events in React (and JS) have two phases:

// Capturing phase → event goes from outer → inner (top → down).
// Bubbling phase → event goes from inner → outer (bottom → up).
// With onClickCapture → you “catch” the event in the capturing phase.
// With onClick → you “catch” the event in the bubbling phase.

// That’s why when you clicked the inner div, you saw logs like:
// Outer (capturing)
// Inner (capturing)
// Inner (bubbling)
// Outer (bubbling)

// In simple words:

// Capturing = parent first, then child
// Bubbling = child first, then parent