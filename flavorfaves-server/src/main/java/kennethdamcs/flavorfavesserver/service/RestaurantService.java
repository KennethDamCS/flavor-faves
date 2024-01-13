package kennethdamcs.flavorfavesserver.service;

import kennethdamcs.flavorfavesserver.entity.Restaurant;
import org.springframework.stereotype.Service;

import java.util.List;

//@Service
public interface RestaurantService {
    List<Restaurant> getAllRestaurants();
}
