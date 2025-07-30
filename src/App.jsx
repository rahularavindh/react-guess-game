import React, { useState } from 'react'
import './App.css'
import Result from './components/Result'
const guess = Math.floor(Math.random() * 10) + 1;
const App = () => {
    const [term,setTerm] = useState();
    const handleChange = (e) => {
        setTerm(e.target.value);
    }
  return (
    <>
      <h1 className="head">Guess the Number Game</h1>
      <div className="container">
        <label htmlFor="input" className="label">Guess the number between 1 to 10 </label>
        <input 
            className="input" 
            type="text" 
            placeholder="Enter your guess"
            onChange={handleChange}
        />
        <Result guess={guess} term={term} />
      </div>
    </>
  )
}

export default App
