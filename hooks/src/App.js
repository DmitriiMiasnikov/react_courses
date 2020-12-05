import React from 'react';
import './App.css';
import { HookCounter } from './components/HookCounter/HookCounter';
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
        <HookCounter />
      </div>
    </Context.Provider>

  );
}

export default App;
