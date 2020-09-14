import React from 'react';
import HomePage from './pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" componenet={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
