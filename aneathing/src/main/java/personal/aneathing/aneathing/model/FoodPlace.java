package personal.aneathing.aneathing.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity //map class to database
public class FoodPlace implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    private String category;
    private String cuisine;
    private String name;
    private String remarks;
    private String review;
    private Boolean revisit;
    private String imageURL;
    private String restaurantUrl;
    private String mapUrl;

    public FoodPlace() {
    }

    public FoodPlace(Long id, String category, String cuisine, String name, String remarks, String review, String imageURL) {
        this.id = id;
        this.category = category;
        this.cuisine = cuisine;
        this.name = name;
        this.remarks = remarks;
        this.review = review;
        this.revisit = revisit;
        this.imageURL = imageURL;
        this.restaurantUrl = restaurantUrl;
        this.mapUrl = mapUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public Boolean getRevisit() {
        return revisit;
    }

    public void setRevisit(Boolean revisit) {
        this.revisit = revisit;
    }

    public String getRestaurantUrl() {
        return restaurantUrl;
    }

    public void setRestaurantUrl(String restaurantUrl) {
        this.restaurantUrl = restaurantUrl;
    }

    public String getMapUrl() {
        return mapUrl;
    }

    public void setMapUrl(String mapUrl) {
        this.mapUrl = mapUrl;
    }

    @Override
    public String toString() {
        return "FoodPlace{" +
                "id=" + id +
                ", category='" + category + '\'' +
                ", cuisine='" + cuisine + '\'' +
                ", name='" + name + '\'' +
                ", remarks='" + remarks + '\'' +
                ", review='" + review + '\'' +
                ", revisit=" + revisit +
                ", imageURL='" + imageURL + '\'' +
                ", restaurantUrl='" + restaurantUrl + '\'' +
                ", mapUrl='" + mapUrl + '\'' +
                '}';
    }
}
