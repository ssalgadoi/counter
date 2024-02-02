// src/App.js
import React from 'react';
import './App.css';
import logo from './image/logo.png';
import Button from './componets/button';  
import Content from './componets/content';
import { useState } from 'react'


function App() {

  const [numClicks, setNumClicks] = useState(0);


  const handleClick = () => {
    setNumClicks( numClicks + 1 );
  };

  const resetCounter = () => {
    setNumClicks(0)
  };

  return (
    <div className="App">
      <div className="container-logo">
        <img className="logo" src={ logo } alt="logo" />
      </div>
      <div className='main-container'>
        <Content numClick={ numClicks } />
        <Button text="Click" isButtonClick= { true } handleClick={ handleClick } />
        <Button text="Restart" isButtonClick={ false } handleClick={ resetCounter } />
      </div>
    </div>
  );
}

export default App;
