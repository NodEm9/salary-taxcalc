import React from 'react';
import Tax from './component/tax'
import Image from './component/image/header-image';
import './App.css'


function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <div className="imgDiv">
          <Image />
        </div>
        <div>
          <h1>Einkommensteuer rechner <b>|</b></h1>
          <h2>Salary income Tax calculator . </h2>
        </div>
      </header>
      <div className="module-form">
        <Tax />
      </div>
    </div>
  );
}

export default App
