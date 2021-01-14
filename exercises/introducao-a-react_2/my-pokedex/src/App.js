import React from 'react';
import './App.css';
import data from './data';
import Pokedex from './Pokedex';



function App() {
  return (
    <div>
      <h1> Pokedex </h1>
      <Pokedex pokemons={data}/>
    </div>
  );
}

export default App;
