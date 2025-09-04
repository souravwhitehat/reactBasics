
import { useState } from 'react'
import './App.css'
import './practice' 
import ChangeBG from './practice'

function App() {

  const [color, setcolor] = useState("olive")
  const [message, setmessage] = useState("click any button to change color")
  let textcolor;
  if(color==="red"|| color==="green"||color==="blue"){
    textcolor="white"
  }
  else{
    textcolor="black"
  }
  return (
<>
    {/* <div className='w-full h-screen duration-200' style={{ backgroundColor: color, color:textcolor}}>
      <h1  className="text-2xl font-bold mb-4">{message}</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }} onClick={() => { 
          setcolor('red') ;
          setmessage("now background is Red")}}>Red</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }} onClick={() => { 
          setcolor('blue');
           setmessage("now background is blue")
          }}>blue</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }} onClick={() => { 
          setcolor('green');
           setmessage("now background is green")
          }}>green</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "yellow", color: "black" }} onClick={() => { 
          setcolor('yellow') 
           setmessage("now background is Yellow")
          }}>yellow</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "lavender", color: "black" }} onClick={() => { setcolor('lavender')
             setmessage("now background is lavender")
           }}>lavender</button>
        </div>
      </div>
    </div> */}
      <ChangeBG />
      </>

  )
}

export default App
