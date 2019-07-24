import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup/">Register</Link>
        </li>
        <li>
          <Link to="/signin/">Login</Link>
        </li>
      </header>
    </div>
  );
}

export default App;
