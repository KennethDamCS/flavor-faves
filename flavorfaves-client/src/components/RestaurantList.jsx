import React from 'react';

const RestaurantList = ({ restaurants }) => {
  if (!restaurants) {
    // Handle the case where the 'restaurants' prop is undefined or null
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
            {/* Display popular items if available */}
            {restaurant.popularItems && restaurant.popularItems.length > 0 && (
              <div>
                <h3>Popular Items</h3>
                <ul>
                  {restaurant.popularItems.map(item => (
                    <li key={item.id}>
                      {/* Display popular item details */}
                      <div>Name: {item.itemName}</div>
                      {/* Display image if available */}
                      {/* {item.itemPictureUrl && (
                        <img src={item.itemPictureUrl} alt={item.itemName} style={{ maxWidth: '100px' }} />
                      )} */}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
