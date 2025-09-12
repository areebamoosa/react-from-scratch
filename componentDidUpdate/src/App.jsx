// Mini Project # 23 : componentDidUpdate
// Task : Title Updater
// * When counter updates, also update document.title with new count.

import { useEffect, useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {


  const [counter, setCounter] = useState(1)

  function count() {
    setCounter(prev => prev + 1)
  }


  useEffect(() => {
    document.title = `Count: ${counter}`


  }, [counter])

  return (
    <>

      {counter}
      <Button onClick={count} />

    </>
  )
}

export default App