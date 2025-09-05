import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increment() {
   setCount(count+1)
   return count
  }
  const decrement = ()=>{
    if(count>0)setCount(count-1)
    return count
  }
  let reset=()=>{
    setCount(0)

  }
  return (
   <div>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button><br />
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
   </div>
  )
}

export default App
