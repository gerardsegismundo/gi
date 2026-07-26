import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Sample React App</h1>
        <p>This is a basic React application demonstrating common features.</p>
        
        <div className="card">
          <h2>Counter Example</h2>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
          <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>
            Reset
          </button>
        </div>

        <div className="card">
          <h2>Input Example</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{
              padding: '8px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '200px'
            }}
          />
          {name && <p style={{ marginTop: '10px' }}>Hello, {name}!</p>}
        </div>

        <div className="card">
          <h2>Features Demonstrated</h2>
          <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li>React functional components</li>
            <li>Hooks (useState)</li>
            <li>Event handling</li>
            <li>Conditional rendering</li>
            <li>Component composition</li>
          </ul>
        </div>

        <p style={{ marginTop: '20px', fontSize: '12px', opacity: 0.8 }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;