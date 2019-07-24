import React from 'react';
import { Route, Link } from 'react-router-dom';
import Index from './components/Index';
import Signup from './components/Signup';
import Signin from './components/Signin';
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

      <Route path="/" exact component={Index} />
      <Route path="/signup/" component={Signup} />
      <Route path="/signin/" component={Signin} />
    </div>
  );
}

export default App;
