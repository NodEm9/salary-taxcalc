import React from 'react';
import Tax from './component/tax'
import { ThemeContext, themes } from '../ThemeContext/theme-context';
import { ThemedButton } from '../ThemeContext/theme-button';
import Image from './component/image/header-image';
import './App.css'


function App() {
  return (    
    <div className='App'>
      <header className="App-header">
        <div className="imgDiv">
          <Image />
        </div>
        <h1>Einkommensteuer rechner / Tax Calculator for Monthly Salary Income. </h1>
      </header>
      <div className="module-form">
        <Tax />
      </div>
    </div>
  );

}

export default App
