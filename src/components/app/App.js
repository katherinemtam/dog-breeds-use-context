import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BreedsList from '../breeds/BreedsList';
import { useThemes } from '../state/ThemeProvider';
import BreedToggle from '../toggles/BreedToggle';
import ThemeToggle from '../toggles/ThemeToggle';
import { theme } from '../../services/theme.js';

function App() {
  const { mode } = useThemes();

  return (
    <div className={`flex flex-col justify-center items-center p-0 ${theme[mode]}`}>
      <h1 className="text-3xl">The CatDog Encyclopedia</h1>
      <ThemeToggle />
      <BreedsList />
    </div>
  );
}

export default App;
