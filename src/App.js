// src/App.js
import React from 'react';
import './App.css';
import logo from './image/logo.png';
import Button from './componets/button';  
import Content from './componets/content';


function App() {
  const handleClick = () => {
    console.log("Click");
  };

  const resetCounter = () => {
    console.log("Restart");
  };

  return (
    <div className="App">
      <div className="container-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className='main-container'>
        <Content numClick="5" />
        <Button text="Click" isButtonClick={true} handleClick={handleClick} />
        <Button text="Restart" isButtonClick={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
