import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [num, setnum] = useState(false)
  const [char, setchar] = useState(false)
  const [pass, setpass] = useState("")

  const passwordGenarator = useCallback(() => {
    let password = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (num) str += "0123456789"
    if (char) str += "@#$%^@%^&"

    for (let i = 1; i <= length; i++) {
      let randomChar = Math.floor(Math.random() * str.length)  // ✅ fixed
      password += str.charAt(randomChar)
    }
    setpass(password)  // ✅ fixed
  }, [length, num, char])  // ✅ fixed dependencies

  useEffect(() => {
    passwordGenarator()
  }, [length, num, char, passwordGenarator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
      PassWOd Genarator
      <div className='flex shadow rounded-lg overflow-hidden mb-4 text-black bg-white'>
        <input
          type="text"
          value={pass}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
        />
        <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-3'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setlength(Number(e.target.value)) }}
          />
          <label> length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            checked={num}
            id='numInput'
            onChange={() => { setnum(prev => !prev) }}
          />
          <label htmlFor="numInput">Numbers</label>

          <input
            type="checkbox"
            checked={char}
            id='charInput'
            onChange={() => { setchar(prev => !prev) }}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
