import './App.css';
import { Header } from './components/Header/Header';
import { ItemList } from './components/ItemList/ItemList';
import { PersonDetails } from './components/PersonDetails/PersonDetails';
import { RandomPlanet } from './components/RandomPlanet/RandomPlanet';
import React, { useState } from 'react';


const states = {
  headerItems: [
    'People',
    'Planets',
    'Starships'
  ],
}


function App() {
  const [selectedPerson,setSelectedPerson] = useState(null);
  const onPersonSelected = (id) => {
    setSelectedPerson(id);
  }
  return (
    <div className="App">
      <Header headerItems={states.headerItems}/>
      <RandomPlanet />
      <div className='row md2'>
        <div className='col-md-6'>
          <ItemList itemList={states.itemList} onPersonSelected={onPersonSelected}/>
        </div>
        <div className='col-md-6'>
          <PersonDetails selectedPerson={selectedPerson}/>
        </div>
      </div>
    </div>
  );
}

export default App;
