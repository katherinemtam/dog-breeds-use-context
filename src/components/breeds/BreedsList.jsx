import React from 'react';
import { useBreeds } from '../state/BreedProvider';
import Breed from './Breed';

const BreedsList = () => {
  const breeds = useBreeds();

  const breedElements = breeds.map(breed => (
  <li key={breed.name} className="flex justify-center border rounded-xl m-4 w-64 p-2 shadow-lg">
    <Breed {...breed} />
  </li>
  ))

  return <ul className="flex flex-wrap justify-center w-5/6">{breedElements}</ul>
}

export default BreedsList;

