import { useState } from "react";


// let counter = 5;
function App() {

let  [counter , setCounter] = useState(15)

  function increase(){
    console.log("clicked",Math.random());
    if (counter<20) {
      
      setCounter(counter+1)  
      //     setCounter(counter+1)  
      //     setCounter(counter+1)  
      //     setCounter(counter+1)  
    }
  }
  //functional update.......Important....
  // setCounter(prev=>prev+1)  
  // setCounter(prev=>prev+1)  
  // setCounter(prev=>prev+1)  
  // setCounter(prev=>prev+1)  
      
  function decrease(){
    console.log("clicked",Math.random());
    if (counter>0) {
      setCounter(counter-1)  
    }
    else{
      alert("its already 0")
    }
  }
  const reset = ()=>{
    setCounter(0)
  }
  const double=()=>{
     if (counter<20) {
      setCounter(counter+2)  
      
    }
  }

  return (
    <>
   
      <h1>React</h1>
      <h2>Counter{counter}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={double}>++</button>
     
    </>
  )
}

export default App
