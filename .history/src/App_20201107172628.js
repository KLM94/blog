import './App.css';
import React from 'react';
import { Router }from "@reach/router"
import Homepage from './Components/Homepage'
import Blog from './Components/Blog'
import OlderBlogs from './Components/OldBlogs';

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
      <Router>
       <Homepage path='/'/>
       <Blog path='/blog' />
       <OlderBlogs path='/blog/archive-blogs' />
       </Router>
      </header>
    </div>

  );
}

export default App;
