// Mini Project # 9 : useEffect
// Task : Live Clock
// * Show the current time updating every second using setInterval inside useEffect.

import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())

    }, 1000);

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <h1>{time}</h1>
    </>
  )
}

export default App