import './App.css';
import React from 'react';
import { Router }from "@reach/router"
import Homepage from './Components/Homepage'
import Blog from './Components/Blog'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <Homepage path='/'/>
       <Blog path='/blog' />
      </header>
    </div>
    </Router>
  );
}

export default App;
