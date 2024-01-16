package kennethdamcs.flavorfavesserver.response;

import lombok.Data;

@Data
public class PopularItemResponse {

    private String itemName;
    private String itemPictureUrl;

    //Constructors, getters, setters

    public PopularItemResponse() {
        //Default constructor
    }

    //Parameterized constructor
    public PopularItemResponse(String itemName, String itemPictureUrl) {
        this.itemName = itemName;
        this.itemPictureUrl = itemPictureUrl;
    }

}
