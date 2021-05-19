package personal.aneathing.aneathing.repo;

import org.springframework.data.jpa.repository.JpaRepository; //use methods in JpaRepository
import personal.aneathing.aneathing.model.FoodPlace;

import java.util.List;
import java.util.Optional;

public interface FoodPlaceRepo extends JpaRepository<FoodPlace, Long>  {

    void deleteFoodPlaceById(Long id);

    Optional<FoodPlace> findFoodPlaceById(Long id);

    Optional<List<FoodPlace>> findFoodPlacesByCategory(String category);

    Optional<List<FoodPlace>> findFoodPlacesByCuisine(String cuisine);

    Optional<FoodPlace> findFoodPlaceByName(String name);
}
