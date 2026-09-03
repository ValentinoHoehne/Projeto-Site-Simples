import { useState } from 'react'
import './App.css'
import Button from './components/button'
import Navbar from './components/navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button></Button>
      <Navbar></Navbar>
    </>
  )
}

export default App
