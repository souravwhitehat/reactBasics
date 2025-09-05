import { useState } from "react"

function Text() {
  const [show, setShow] = useState(true) 

  return (
    <div>
        {show&& <h1>Hii Buddy</h1>}
    <button onClick={()=>setShow(!show)}>{show?"HIde":"show"}</button>

    </div>
  )
}

export default Text
