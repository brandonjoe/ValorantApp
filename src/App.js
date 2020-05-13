import React from 'react';
import './App.css';
import {Switch, Route} from  'react-router-dom';
import Landing from './Landing/Landing.js'
import Bind from './Maps/Bind/Bind.js'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path= {"/"} exact component = {Landing} />
        <Route path= {"/bind"} exact component = {Bind} />
      </Switch>
    </div>
  );
}

export default App;
