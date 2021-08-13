import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BreedsList from '../breeds/BreedsList';
import BreedToggle from '../toggles/BreedToggle';
import ThemeToggle from '../toggles/ThemeToggle';

function App() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto p-8 rounded-xl shadow-lg">
      <ThemeToggle />
      <BreedsList />
    </div>
  );
}

export default App;
