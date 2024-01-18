package kennethdamcs.flavorfavesserver.response;

import lombok.Data;

@Data
public class PopularItemResponse {

    private Long id;
    private String itemName;
    private String itemPictureUrl;

    //Constructors, getters, setters

    public PopularItemResponse() {
        //Default constructor
    }

    //Parameterized constructor
    public PopularItemResponse(Long id, String itemName, String itemPictureUrl) {
        this.id = id;
        this.itemName = itemName;
        this.itemPictureUrl = itemPictureUrl;
    }

}
