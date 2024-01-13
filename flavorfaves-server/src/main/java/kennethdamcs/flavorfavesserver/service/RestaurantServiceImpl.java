package kennethdamcs.flavorfavesserver.service;


import kennethdamcs.flavorfavesserver.entity.Restaurant;
import kennethdamcs.flavorfavesserver.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantServiceImpl implements RestaurantService{
    private final RestaurantRepository restaurantRepository;
    private final RestaurantService restaurantService;

    @Autowired
    public RestaurantServiceImpl(RestaurantRepository restaurantRepository, RestaurantService restaurantService) {
        this.restaurantRepository = restaurantRepository;
        this.restaurantService = restaurantService;
    }

    @Override
    public List<Restaurant> getAllRestaurants(){
        return restaurantRepository.findAll();
    }
}
