import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const Search = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    //Fetch from GetAllByLocation API
    axios.get('/api/v1/restaurants/{location}') 
      .then(response => {
        setLocations(response.data);
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });
  }, []);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
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
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
      </div>

      {/* Add more content or components based on the selected location */}
    </div>
  );
};

export default Search;
