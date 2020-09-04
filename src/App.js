import React from 'react';

import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import ComponentF from './components/ComponentF';
import CounterOne from './components/CounterOne';


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();


function App() {
  return (
    <div className="App">
      <CounterOne />
    </div>
  );
}

export default App;
