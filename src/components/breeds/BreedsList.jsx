import React, {useState, useEffect} from 'react';
import { fetchDogs } from '../../services/dogApi';
import { useThemes } from '../state/ThemeProvider';
import Breed from './Breed';

const BreedsList = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetchDogs().then(setBreeds);
  }, [])

  const breedElements = breeds.map(breed => (
  <li key={breed.name} className="flex justify-center border rounded-xl m-4 w-64 p-2 shadow-lg">
    <Breed {...breed} />
  </li>
  ))

  return <ul className="flex flex-wrap justify-center w-5/6">{breedElements}</ul>
}

export default BreedsList;
