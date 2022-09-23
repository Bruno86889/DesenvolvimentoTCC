import { useState } from 'react'
import './scss/index.scss'
import './scss/button.scss'
import { useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('')

  useEffect(() => {
    setColor(`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`)
  }, [count])

  function handleClick(e) {
    setCount(count + 1)
  }

  return <div className='colorWrap' style={{ background: color }}>
    <button style={{ background: color }} onClick={handleClick}>{count}</button>
  </div>
}

export default App
