import React, {createContext, useContext, useEffect, useState} from 'react';
import { fetchCats } from '../../services/catApi';
import { fetchDogs } from '../../services/dogApi';

const BreedContext = createContext();

export const BreedProvider = ({ children }) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedApi, setSelectedApi] = useState('dogs');
  const [page, setPage] = useState(1);

  //bind return new function that automatically calls page as its first argument
  //null = this.something = example: cat.insert.bind(cat)
  const mapApi = {
    cats: fetchCats.bind(null, page),
    dogs: fetchDogs.bind(null, page),
  }

  useEffect(() => {
    mapApi[selectedApi]().then(setBreeds);
  }, [selectedApi, page])

  return(
    <BreedContext.Provider value = {{ breeds, setSelectedApi, mapApi, page, setPage }}>
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

export const useAvailableAPIs = () => {
  const { mapApi } = useContext(BreedContext);
  console.log(mapApi);
  return Object.keys(mapApi);
}

export const usePages = () => {
  const {page, setPage} = useContext(BreedContext);
  return {page, setPage};
}

export default BreedProvider;
