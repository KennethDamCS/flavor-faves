import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Search = () => {
  const navigate = useNavigate(); 
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSearch = () => {
    if (selectedLocation) {
      // Navigate to RestaurantList with the selected location
      navigate(`/restaurants/${selectedLocation.toLowerCase()}`); 
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to Flavor Faves!</h1>
      <div className="text-center mb-4">
        <p className="lead">Discover your favorite restaurants based on location.</p>
      </div>

      <div className="d-flex justify-content-center">
        <div className="input-group mb-3">
          <select
            className="custom-select"
            id="locationDropdown"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="" disabled>Select a location</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Vancouver">Vancouver</option>
          </select>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
