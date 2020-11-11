import './App.css';
import { Header } from './components/Header/Header';
import { ItemList } from './components/ItemList/ItemList';
import { PersonDetails } from './components/PersonDetails/PersonDetails';
import { RandomPlanet } from './components/RandomPlanet/RandomPlanet';


const states = {
  headerItems: [
    'People',
    'Planets',
    'Starships'
  ],
  itemList: null
}

function App() {
  return (
    <div className="App">
      <Header headerItems={states.headerItems}/>
      <RandomPlanet />
      <div className='row md2'>
        <div className='col-md-6'>
          <ItemList />
        </div>
        <div className='col-md-6'>
          <PersonDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
