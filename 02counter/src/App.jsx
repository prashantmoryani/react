import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const incrementCounter = () => {
    if(counter<=19){
      setCounter(counter + 1)
    }
    
  }
  const decrementCounter = () => {
    if(counter>=1){
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={incrementCounter}>Increment Counter {counter}</button>
      <br />
      <button onClick={decrementCounter}>Decrement Counter {counter}</button> 
    </>
  )
}

export default App
