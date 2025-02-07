import { useEffect, useState } from 'react'

import './App.css'
import Todos from './components/todo.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState("")

  useEffect(() => {
    console.log("useEffect triggered!");
  }, [count]); //

  return (
    <>
    <Todos/>
    <br />
    <br />
    <br />
    <h1>Count : {count}</h1>
    <h3>Name : {name}</h3>
    <button onClick={()=>setCount(count+1)}>Increse</button>
    <button onClick={()=>setCount(count-1)}>Decrease</button>

    
      
    </>
  )
}

export default App
