import './App.css';
import React from 'react';
import { Router }from "@reach/router"
import Homepage from './Components/Homepage'
import Blog from './Components/Blog'
import ArchiveBlogs from './Components/OldBlogs';

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
      <Router>
       <Homepage path='/'/>
       <Blog path='/blog' />
       <ArchiveBlogs path='/blog/archive-blogs' />
       </Router>
      </header>
    </div>

  );
}

export default App;
