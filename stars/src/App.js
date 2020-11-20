import './App.css';
import { Header } from './components/Header/Header';
import { RandomPlanet } from './components/RandomPlanet/RandomPlanet';
import React from 'react';
import ErrorBoundry from './assets/ErrorPage/ErrorPage';
import { Row } from './components/Row/Row'
import { PersonDetails, PlanetDetails, StarshipDetails } from './components/sw-components/details';
import { PersonList, PlanetList, StarshipList } from './components/sw-components/item-lists'

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

        <Row left={<PersonList />} right={<PersonDetails />} />
        <Row left={<PlanetList />} right={<PlanetDetails />} />
        <Row left={<StarshipList />} right={<StarshipDetails />} />
        {/* <PersonDetails />
        <PlanetDetails />
        <StarshipDetails />
        <PersonList />
        <StarshipList />
        <PlanetList /> */}
        {/* <ItemsPage type='people' getData={{ listItem: swapi.getAllPeople, item: swapi.getPerson, imageURL: 'characters' }} />
        <ItemsPage type='planet' getData={{ listItem: swapi.getAllPlanets, item: swapi.getPlanet, imageURL: 'planets' }} />
        <ItemsPage type='starship' getData={{ listItem: swapi.getAllStarships, item: swapi.getStarship, imageURL: 'starship' }} /> */}
      </div>
    </ErrorBoundry>

  );
}

export default App;
