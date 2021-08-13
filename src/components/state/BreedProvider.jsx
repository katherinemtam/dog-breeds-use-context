import React, {createContext, useContext, useEffect, useState} from 'react';
import { fetchCats } from '../../services/catApi';
import { fetchDogs } from '../../services/dogApi';

const BreedContext = createContext();

export const BreedProvider = ({ children }) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedApi, setSelectedApi] = useState('dogs');

  const mapApi = {
    dogs: fetchDogs,
    cats: fetchCats
  }

  useEffect(() => {
    mapApi[selectedApi]().then(setBreeds);
  }, [selectedApi])

  return(
    <BreedContext.Provider value = {{ breeds, setSelectedApi, mapApi }}>
      {children}
    </BreedContext.Provider>
  );
};

export const useBreeds = () => {
  const { breeds } = useContext(BreedContext);
  return breeds;
}

export const useSetSelectedApi = () => {
  const { setSelectedApi } = useContext(BreedContext);
  return setSelectedApi;
}

export default BreedProvider;
