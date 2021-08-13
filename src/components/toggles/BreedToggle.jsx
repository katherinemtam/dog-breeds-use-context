import React from 'react';
import { useAvailableAPIs, useSetSelectedApi } from '../state/BreedProvider';

const BreedToggle = () => {
  const availableAPIs = useAvailableAPIs()
  const setSelectedApi = useSetSelectedApi();
  

  const handleChange = ({target}) => {
    setSelectedApi(target.value)
  }

  return(
    <ul className="flex">
      {availableAPIs.map(api => (
        <li key={api} className="m-2 cursor-pointer">
          <label>{api}</label>
          <input 
              className=""
              type="radio" 
              name="api" 
              value={api}
              onChange={handleChange}
          />
        </li>
      ))}
    </ul>
  )
}

export default BreedToggle;
