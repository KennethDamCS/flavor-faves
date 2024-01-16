package kennethdamcs.flavorfavesserver.response;

import lombok.Data;

import java.util.List;

@Data
public class RestaurantResponse {

    private long id;
    private String name;
    private String address;
    private String phone;
    private String location;
    private List<PopularItemResponse> popularItems;

    //Constructors, getters, setters

    public RestaurantResponse() {
        //Default constructor
    }

    //Parameterized constructor
    public RestaurantResponse(String name, String address, String phone, String location, List<PopularItemResponse> popularItems) {
        //this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.location = location;
        this.popularItems = popularItems;
    }

}
