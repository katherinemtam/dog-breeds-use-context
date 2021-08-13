import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BreedsList from './components/breeds/BreedsList';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={BreedsList} />
    </Switch>

  );
}

export default App;
