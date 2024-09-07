import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10);
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [color, setColor] = useState("cyan");
  const [firstName, setFirstName] = useState("Pedro");
  const [charCount, setCharCount] = useState(0);

  setInterval(() => setTime((time) => new Date().toLocaleTimeString()), 1000);

  function toggleColor() {
    color == "cyan" ? setColor("red") : setColor("cyan");
  }

  function countChars() {
    // setCharCount(firstName.length);
    console.log(firstName);
  }

  function handleInput(event) {
    setFirstName(event.target.value);
    setCharCount(firstName.length);
    console.log(firstName);

  }

  return (
    <>
      <div>
        <h3>Data Binding in REACT</h3>
        <ul style={{ "textAlign": "left" }}>
          <li>useState</li>
          <li>This binds data to variables for dynamic updates</li>
          <li>Vars are declared like so: const [count, setCount] = useState(10)</li>
          <li>Each useState variable has two parts (primitive, function)</li>
        </ul>
      </div>
      <h1>Hello + <span style={{ "color": color }}>{firstName}</span></h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <button onClick={() => setCount((count) => count - 1)} style={{ "marginLeft": "10px", "color": "red" }}>-</button>
        <button style={{ "marginLeft": "10px" }} onClick={() => setTime((time) => new Date().toLocaleTimeString())}>time is {time}</button>
      </div>
      <div className="card">
        <button style={{ "backgroundColor": color }} onClick={toggleColor} onMouseOver={toggleColor} onMouseOut={toggleColor}>Hover Color</button>
      </div>
      <div className="card">
        <input className="text-input" type="text" value={firstName} onChange={handleInput} />
        <button>{charCount}</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
