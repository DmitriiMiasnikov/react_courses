import React, { useEffect, useState } from 'react';
import './App.css';
import { HookCounter } from './components/HookCounter/HookCounter';
import { HookSwitcher } from './components/HookSwitcher/HookSwitcher';
import { Notification } from './components/Notification/Notification';
import { Person } from './components/Person/Person';

export const Context = React.createContext();
const state = {
  personName: {
    firstName: 'Bob',
    lastName: 'Smith'
  }
}
function App() {
  const [visible, setVisible] = useState(true);
  return (
    <Context.Provider value={state}>
      <button onClick={() => setVisible((s) => !s)} className='button-clear'>clear scene</button>
      {visible && <div className="App">
        <HookSwitcher />
        <Person />
        <HookCounter />
        <Notification />
      </div>}
    </Context.Provider>

  );
}

export default App;
