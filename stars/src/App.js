import './App.css';
import { Header } from './components/Header/Header';
import { RandomPlanet } from './components/RandomPlanet/RandomPlanet';
import React from 'react';
import ErrorBoundry from './assets/ErrorPage/ErrorPage';
import { ItemsPage } from './components/ItemsPage/ItemsPage'
import { swapi } from './Servises/swapiServises'


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
      <ItemsPage getData={{listItem: swapi.getAllPeople, item: swapi.getPerson, imageURL: 'characters'}}/>
      <ItemsPage getData={{listItem: swapi.getAllPlanets, item: swapi.getPlanet, imageURL: 'planets'}}/>
    </div>
    </ErrorBoundry>

  );
}

export default App;
