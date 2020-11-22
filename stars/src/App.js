import './App.css';
import { Header } from './components/Header/Header';
import { RandomPlanet } from './components/RandomPlanet/RandomPlanet';
import React, { useState } from 'react';
import ErrorBoundry from './assets/ErrorPage/ErrorPage';
import { Row } from './components/Row/Row'
import { PersonDetails, PlanetDetails, StarshipDetails } from './components/sw-components/details';
import { PersonList, PlanetList, StarshipList } from './components/sw-components/item-lists'
import { ItemsPage } from './components/ItemsPage/ItemsPage';

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
    <ErrorBoundry>
      <div className="App">
        <Header headerItems={states.headerItems} />
        <RandomPlanet />
        <ItemsPage left={<PersonList onItemSelected={onItemSelected} />} right={<PersonDetails itemId={itemId} />} />
        {/* <Row left={<PersonList />} right={<PersonDetails/>} />
        <Row left={<PlanetList />} right={<PlanetDetails />} />
        <Row left={<StarshipList/>} right={<StarshipDetails />} /> */}
      </div>
    </ErrorBoundry>

  );
}

export default App;
