import React from 'react';
import './App.css';
import Clicker from './components/Clicker'

function App() {
  return (
    <div className="App">
      <header>
      	<div className="content">
      		<div className='mar'><i className="far fa-hand-pointer fa-2x"></i></div><p> React Clicker</p>
      	</div>
      </header>
      <Clicker />
    </div>
  );
}

export default App;
