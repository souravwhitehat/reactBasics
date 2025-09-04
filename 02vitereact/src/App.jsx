import { useState } from 'react'
import './App.css'
import Card from './componets/card'

function App() {


  const myObj ={
    username:"sourav",
    age:21
  }
  const myArr=[1,2,3]

  return (
    <>
    <h1 className='text-[50px]'>Hello</h1>
   

    <Card username = 'Sourav' obj={myObj} arr={myArr} />
    <Card username = 'ketu' obj={myObj} arr={myArr} />
    <Card username = 'setu' obj={myObj} arr={myArr} />
    <Card username = 'Sourav' obj={myObj} arr={myArr} />
 
    </>
  )
}

export default App
