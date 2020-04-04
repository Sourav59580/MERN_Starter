import React from 'react';
import './App.css';
import Customers from './components/Customers';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container w-75 p-4">
        <Customers />
      </div>
    </div>
  );
}

export default App;
