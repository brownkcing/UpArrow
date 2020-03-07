import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import  Scroll  from './components/Scroll'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{height:"2000px"}}>
          <Scroll showBelow={500} />
          <h3>Scroll down</h3>
          <h3><FontAwesomeIcon icon={faArrowDown} /></h3>
        </div> 
      </header>
    </div>
  );
}

export default App;
