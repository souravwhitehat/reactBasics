import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <>
    <h1>Hello i am a h1</h1>
    </>
  )
}

const anotherelement=(
  <a href="https://www.google.com" target='_blank'>Google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  "click here to go to google"

)


createRoot(document.getElementById('root')).render(
    // reactElement
    // anotherelement
    <App />

 
)
