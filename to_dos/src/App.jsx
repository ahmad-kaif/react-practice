import { useState } from 'react'

import './App.css'
import Todos from './components/todo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todos/>
      
    </>
  )
}

export default App
