import './App.css';
import { Header } from './components/Header/Header';
import { ItemList } from './components/ItemList/ItemList';
import { PersonDetails } from './components/PersonDetails/PersonDetails';
import { RandomPlanet } from './components/RandomPlanet/RandomPlanet';
import React, { useEffect, useState } from 'react';
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
  const [selectedItem,setSelectedItem] = useState(null);
  const [list, setList] = useState(states.itemList);
  const [loading, setLoading] = useState(true);
  const onPersonSelected = (id) => {
    setSelectedItem(id);
  }
  const headerHandler = (list = 'People') => {
    setLoading(true)
    switch(list) {
      case 'People': {
        swapi.getAllPeople().then((res) => {
          setLoading(false)
          setList(res)
        })
        break
      }
      case 'Planets': {
        swapi.getAllPlanets().then((res) => {
          setLoading(false)
          setList(res)
        })
        break
      }
      case 'Starships': {
        swapi.getAllStarships().then((res) => {
          setLoading(false)
          setList(res)
        })
        break
      }
      default: break
    }
  }
  useEffect(() => {
    headerHandler()
  }, [])
  return (
    <div className="App">
      <Header headerItems={states.headerItems} headerHandler={headerHandler}/>
      <RandomPlanet />
      <div className='row md2'>
        <div className='col-md-6'>
          <ItemList itemList={list} onPersonSelected={onPersonSelected} loading={loading}/>
        </div>
        <div className='col-md-6'>
          <PersonDetails selectedItem={selectedItem}/>
        </div>
      </div>
    </div>
  );
}

export default App;
