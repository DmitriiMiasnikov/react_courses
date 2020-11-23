import './App.css';
import { Header } from './components/Header/Header';
import { RandomPlanet } from './components/RandomPlanet/RandomPlanet';
import React, { useState } from 'react';
import ErrorBoundry from './assets/ErrorPage/ErrorPage';
import { Row } from './components/Row/Row'
import PersonDetails from './components/sw-components/PersonDetails';
import PlanetDetails from './components/sw-components/PlanetDetails';
import StarshipDetails from './components/sw-components/StarshipDetails'
import { PersonList, PlanetList, StarshipList } from './components/sw-components/item-lists'
import { SwapiServiceProvider } from './components/sw-context/sw-context'
import { swapi } from './Servises/swapiServises';

const states = {
  headerItems: [
    'People',
    'Planets',
    'Starships'
  ],
  itemList: []
}


function App() {
  const [itemId, setItemId] = useState(null)
  const onItemSelected = (itemId) => {
    setItemId(itemId)
  }
  return (
    <SwapiServiceProvider value={swapi}>
    <ErrorBoundry>
      <div className="App">
        <Header headerItems={states.headerItems} />
        <RandomPlanet />
        <Row left={<PersonList onItemSelected={onItemSelected} />} right={<PersonDetails itemId={itemId} />} />
        <Row left={<PlanetList onItemSelected={onItemSelected} />} right={<PlanetDetails itemId={itemId} />} />
        <Row left={<StarshipList onItemSelected={onItemSelected} />} right={<StarshipDetails itemId={itemId} />} />
      </div>
    </ErrorBoundry>
    </SwapiServiceProvider>
  );
}

export default App;
