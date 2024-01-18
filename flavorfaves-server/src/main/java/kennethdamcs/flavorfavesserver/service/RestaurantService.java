package kennethdamcs.flavorfavesserver.service;

import kennethdamcs.flavorfavesserver.entity.PopularItem;
import kennethdamcs.flavorfavesserver.entity.Restaurant;
import kennethdamcs.flavorfavesserver.response.PopularItemResponse;
import kennethdamcs.flavorfavesserver.response.RestaurantResponse;
import org.springframework.stereotype.Service;

import java.util.List;

//@Service
public interface RestaurantService {
    List<Restaurant> getAllRestaurants();


    List<RestaurantResponse> getAllRestaurantsByLocation(String location);

    RestaurantResponse mapToDto(Restaurant restaurant);

    List<PopularItemResponse> mapPopularItemsToDto(List<PopularItem> popularItems);

    //Helper method to map popular items individually before into a List
    PopularItemResponse mapPopularItemsToDtoHelper(PopularItem popularItem);
}
