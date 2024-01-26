import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RestaurantList from './RestaurantList';

const Search = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState('');
  const [restaurants, setRestaurants] = useState(null);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSearch = async () => {
    if (selectedLocation) {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/restaurants/${selectedLocation.toLowerCase()}`);
        setRestaurants(response.data);
        navigate(`/restaurants/${selectedLocation.toLowerCase()}`);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, show a message, etc.
      }
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

      {/* Render RestaurantList only when restaurants are available */}
      {restaurants && <RestaurantList restaurants={restaurants} />}
    </div>
  );
};

export default Search;
