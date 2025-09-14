// Mini Project # 28 : Navigation
// Task : Go Back Button
// * Add a back button using useNavigate

import './App.css'
import Button from './Button'
import { useNavigate } from "react-router-dom"

function App() {

  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </>
  )
}

export default App