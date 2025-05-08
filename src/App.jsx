import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img 
          src="https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png" 
          className="logo" 
          alt="Hacktiv8 logo" 
          style={{ width: "600px", height: "auto" }}
        />
      </div>
      <h1 style={{ marginTop: '-9rem' }}>Welcome to React Mini Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test
        </p>
      </div>
    </>
  )
}

export default App
