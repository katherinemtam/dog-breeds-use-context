import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BreedsList from '../breeds/BreedsList';
import { useThemes } from '../state/ThemeProvider';
import BreedToggle from '../toggles/BreedToggle';
import ThemeToggle from '../toggles/ThemeToggle';
import { theme } from '../../services/theme.js';
import Pagination from '../pagination/Pagination';

function App() {
  const { mode } = useThemes();

  return (
    <div className={`h-screen flex flex-col justify-center items-center p-0 ${theme[mode]}`}>
      <h1 className="text-3xl">The CatDog Encyclopedia</h1>
      <section className="flex items-center w-1/4 m-2 justify-evenly w-4/5">
        <BreedToggle />
        <Pagination />
        <ThemeToggle />
      </section>
      <BreedsList />
    </div>
  );
}

export default App;
