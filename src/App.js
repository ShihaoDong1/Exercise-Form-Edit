import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <label>FirstName: {this.state.firstname}</label>
        <label>LastName: {this.state.lastname}</label> 
        <button>Edit</button>
      </div>
    </>
  );
}

export default App;
