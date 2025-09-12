// Mini Project # 21 : componentWillUnmount
// Task : Cleanup Timer
// * Set an interval that updates time.
// * On unmount, clear it.

import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';



function App() {

  const [time, setTime] = useState(new Date())


  useEffect(() => {

    const timerID = setInterval(() => {
      setTime(new Date())

    }, 1000)

    return () => {
      clearInterval(timerID)
    }

  }, [])


  return (
    <>
      {time.toLocaleTimeString()}
    </>
  )
}

export default App