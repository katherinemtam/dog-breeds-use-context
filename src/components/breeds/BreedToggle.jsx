import React from 'react';
import { useSetSelectedApi } from '../state/BreedProvider';

const BreedToggle = () => {
  const setSelectedApi = useSetSelectedApi();

  const handleChange = ({target}) => {
    setSelectedApi(target.value)
  }

  return(
    <>
      <input 
        type="radio" 
        name="api" 
        value="cats" 
        onChange={handleChange}
      />
      <input 
        type="radio" 
        name="api" 
        value="dogs" 
        onChange={handleChange}
      />
    </>
  )
}

export default BreedToggle;
