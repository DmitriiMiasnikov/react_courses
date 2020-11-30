import React from 'react';
import './App.css';
import { HookSwitcher } from './components/HookSwitcher/HookSwitcher';
import { Person } from './components/Person/Person';

export const Context = React.createContext();
const state = {
  personName: {
    firstName: 'Bob',
    lastName: 'Smith'
  }
}
function App() {
  return (
    <Context.Provider value={state}>
      <div className="App">
        <HookSwitcher />
        <Person />
      </div>
    </Context.Provider>

  );
}

export default App;
