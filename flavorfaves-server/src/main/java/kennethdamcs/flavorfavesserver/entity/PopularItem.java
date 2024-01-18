package kennethdamcs.flavorfavesserver.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "popular_items")
public class PopularItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "popular_item_id")
    private Long id;

    @Column(name = "name")
    private String itemName;

    @Column(name = "picture_url")
    private String itemPictureUrl;

}
