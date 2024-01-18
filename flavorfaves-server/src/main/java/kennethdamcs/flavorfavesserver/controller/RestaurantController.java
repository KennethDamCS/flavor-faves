package kennethdamcs.flavorfavesserver.controller;

import kennethdamcs.flavorfavesserver.response.RestaurantResponse;
import kennethdamcs.flavorfavesserver.service.RestaurantServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/restaurants")
public class RestaurantController {

    @Autowired
    private RestaurantServiceImpl restaurantService;

    @GetMapping("/{location}")
    public ResponseEntity<List<RestaurantResponse>> getAllRestaurantsByLocation(@PathVariable String location){

        List<RestaurantResponse> restaurants = restaurantService.getAllRestaurantsByLocation(location);

        return ResponseEntity.ok(restaurants);
    }

}
