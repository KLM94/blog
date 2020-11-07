import './App.css';
import React from 'react';
import { Router }from "@reach/router"
import Homepage from './Components/Homepage'
import Blog from './Components/Blog'

import { Link } from "@reach/router"

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <Route path='/' component={Homepage} />
       <Route path='/blog' component={Blog} />
      </header>
    </div>
    </Router>
  );
}

export default App;
