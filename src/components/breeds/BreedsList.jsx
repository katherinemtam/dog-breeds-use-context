import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../../services/dogApi';
import { fetchCats } from '../../services/catApi'; 
import Breed from './Breed';

const BreedsList = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetchCats()
    .then(setBreeds);
  }, [])

  const breedElements = breeds.map(breed => (
  <li key={breed.name}>
    <Breed {...breed}/>
  </li>
  ))

  return <ul>{breedElements}</ul>
}

export default BreedsList;
