package kennethdamcs.flavorfavesserver.service;


import kennethdamcs.flavorfavesserver.entity.PopularItem;
import kennethdamcs.flavorfavesserver.entity.Restaurant;
import kennethdamcs.flavorfavesserver.repository.RestaurantRepository;
import kennethdamcs.flavorfavesserver.response.PopularItemResponse;
import kennethdamcs.flavorfavesserver.response.RestaurantResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<RestaurantResponse> getAllRestaurantsByLocation(String location){
        List<Restaurant> restaurants = restaurantRepository.findByLocation(location);

        return restaurants.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public RestaurantResponse mapToDto(Restaurant restaurant) {
        //Can use ModelMapper or manually map attributes

        return new RestaurantResponse(
                restaurant.getId(),
                restaurant.getName(),
                restaurant.getAddress(),
                restaurant.getPhone(),
                restaurant.getLocation(),
                mapPopularItemsToDto(restaurant.getPopularItems())
        );
    }

    @Override
    public List<PopularItemResponse> mapPopularItemsToDto(List<PopularItem> popularItems) {
        return popularItems.stream()
                .map(this::mapPopularItemsToDtoHelper)
                .collect(Collectors.toList());
    }

    //Helper method to map popular items individually before into a List
    @Override
    public PopularItemResponse mapPopularItemsToDtoHelper(PopularItem popularItem) {
        //Can use ModelMapper or manually map attributes

        return new PopularItemResponse(
                popularItem.getId(),
                popularItem.getItemName(),
                popularItem.getItemPictureUrl()
        );
    }
}
