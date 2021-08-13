import React from 'react';
import { useAvailableAPIs, useSetSelectedApi } from '../state/BreedProvider';
import './BreedToggle.css';

const BreedToggle = () => {
  const availableAPIs = useAvailableAPIs()
  const setSelectedApi = useSetSelectedApi();
  
  const handleChange = ({target}) => {
    setSelectedApi(target.value)
  }

  return(
    <ul className="flex cursor-pointer">
      {availableAPIs.map(api => (
        <li key={api} className="cursor-pointer">
          <label className="cursor-pointer">
            <input 
              className="hidden"
              type="radio" 
              name="api" 
              value={api}
              onChange={handleChange}
            />
            <span className="border-gray-500 border-2 p-2 rounded-lg hover:bg-gray-300">{api}</span>
          </label>
        </li>
      ))}
    </ul>
  )
}

export default BreedToggle;
