import React from 'react';
import './App.css'
import Main from "./Main/Main";
import Header from "./Header";

const API = 'https://api.scryfall.com/cards/search?q=lang:ja+name='

function App(){
  return(
    <div className="container">
      <div className="header"><Header /></div>
      <div className="main"><Main /></div>
    </div>
  )
}

export default App;
