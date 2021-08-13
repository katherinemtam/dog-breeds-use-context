import React from 'react';
import { useBreeds } from '../state/BreedProvider';
import Breed from './Breed';

const BreedsList = () => {
  const breeds = useBreeds();

  const breedElements = breeds.map(breed => (
  <li key={breed.name}>
    <Breed {...breed}/>
  </li>
  ))

  return <ul>{breedElements}</ul>
}

export default BreedsList;
