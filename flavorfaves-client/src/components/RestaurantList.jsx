import React from 'react';

const RestaurantList = ({ restaurants }) => {
  if (!restaurants) {
    //Handle the case where the 'restaurants' prop is undefined or null
    return <div>No restaurants available</div>;
  }

  return (
    <div>
      <h2>Restaurant List</h2>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            {/* Display restaurant details */}
            <div>Name: {restaurant.name}</div>
            <div>Address: {restaurant.address}</div>
            <div>Location: {restaurant.location}</div>
            <div>Phone: {restaurant.phone}</div>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
