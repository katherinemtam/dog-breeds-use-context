import React, {useState, useEffect} from 'react';
import { fetchDogs } from '../../services/dogApi';
import Breed from './Breed';

const BreedsList = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetchDogs().then(setBreeds);
  }, [])

  const breedElements = breeds.map(breed => (
  <li key={breed.name}>
    <Breed {...breed}/>
  </li>
  ))

  return <ul>{breedElements}</ul>
}

export default BreedsList;
