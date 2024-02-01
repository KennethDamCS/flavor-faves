
import React from 'react';

const RestaurantList = ({ restaurants }) => {
  function capitalizeFirstLetter(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }

  if (!restaurants) {
    return <div className="text-left">No restaurants available</div>;
  }

  return (
    <div className="restaurant-list container">
      <h2>Restaurant List</h2>
      <div className="row">
        {restaurants.map(restaurant => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={restaurant.id}>
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">{restaurant.name}</h3>
                <p className="card-text">Address: {restaurant.address}</p>
                <p className="card-text">Location: {capitalizeFirstLetter(restaurant.location)}</p>
                <p className="card-text">Phone: {restaurant.phone}</p>
                {restaurant.popularItems && restaurant.popularItems.length > 0 && (
                  <div>
                    <h4>Popular Items</h4>
                    {restaurant.popularItems.map(item => (
                      <p key={item.id}>{item.itemName}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
