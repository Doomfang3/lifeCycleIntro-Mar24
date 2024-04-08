import { useEffect, useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)
  const [secondCount, setSecondCount] = useState(0)

  useEffect(() => {
    console.log('Mounting time')
  }, [])

  useEffect(() => {
    console.log('Render')
  })

  useEffect(() => {
    console.log('Updated count')
    if (count === 10) {
      setSecondCount(42)
    }
  }, [count])

  return (
    <div className='card'>
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
      <button onClick={() => setSecondCount(secondCount + 1)}>
        Secound count is {secondCount}
      </button>
    </div>
  )
}

export default Home
