package kennethdamcs.flavorfavesserver.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@Entity
@Table(name = "restaurants")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "restaurant_id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "location")
    private String address;

    @Column(name = "phone")
    private String phone;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "restaurant_id")
    private List<PopularItem>  popularItems;
}
