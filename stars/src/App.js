import './App.css';
import { Header } from './components/Header/Header';
import { RandomPlanet } from './components/RandomPlanet/RandomPlanet';
import React from 'react';
import { SwapiServiceProvider } from './components/sw-context/sw-context'
import { swapi } from './Servises/swapiServises';
import { PeoplePage } from './components/pages/PeoplePage';
import { StarshipsPage } from './components/pages/StarshipsPage';
import { PlanetsPage } from './components/pages/PlanetsPage';

const states = {
  headerItems: [
    'People',
    'Planets',
    'Starships'
  ],
}


function App() {
  return (
    <SwapiServiceProvider value={swapi}>
      <div className="App">
        <Header headerItems={states.headerItems} />
        <RandomPlanet />
        <PeoplePage />
        <PlanetsPage />
        <StarshipsPage />
      </div>
    </SwapiServiceProvider>
  );
}

export default App;
