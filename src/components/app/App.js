import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BreedsList from '../breeds/BreedsList';
import BreedToggle from '../breeds/BreedToggle';

function App() {
  return (
    <>
      <BreedsList />
    </>
  );
}

export default App;
