import './App.css';
import { Header } from './components/Header/Header';
import { RandomPlanet } from './components/RandomPlanet/RandomPlanet';
import React, { useEffect, useState } from 'react';
import { swapi } from './Servises/swapiServises';
import ErrorBoundry from './assets/ErrorPage/ErrorPage';
import { PeoplePage } from './components/PeoplePage/PeoplePage'


const states = {
  headerItems: [
    'People',
    'Planets',
    'Starships'
  ],
  itemList: []
}


function App() {
  return (
    <ErrorBoundry>
    <div className="App">
      <Header headerItems={states.headerItems} />
      <RandomPlanet />
      <PeoplePage />
    </div>
    </ErrorBoundry>

  );
}

export default App;
