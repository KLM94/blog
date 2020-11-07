import './App.css';
import React, { Component } from 'react';
import Homepage from './Components/Homepage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Route path='/' component={Homepage} />
       <Route path='/blog' component={Blog} />
      </header>
    </div>
  );
}

export default App;
