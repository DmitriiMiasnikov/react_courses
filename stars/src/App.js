import './App.css';
import { swapi } from './Servises/swapiServises'
import { Header } from './components/Header/Header';
import { ItemList } from './components/ItemList/ItemList';
import { PersonDetails } from './components/PersonDetails/PersonDetails';
import { RandomPlanet } from './components/RandomPlanet/RandomPlanet';
import React, { useEffect } from 'react';


const states = {
  headerItems: [
    'People',
    'Planets',
    'Starships'
  ],
  itemList: [
    '234234',
    '23423423'
  ]
}


function App() {

  return (
    <div className="App">
      <Header headerItems={states.headerItems}/>
      <RandomPlanet />
      <div className='row md2'>
        <div className='col-md-6'>
          <ItemList itemList={states.itemList}/>
        </div>
        <div className='col-md-6'>
          <PersonDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
