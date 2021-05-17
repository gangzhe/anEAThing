package personal.aneathing.aneathing.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import personal.aneathing.aneathing.exception.FoodPlaceNotFoundException;
import personal.aneathing.aneathing.model.FoodPlace;
import personal.aneathing.aneathing.repo.FoodPlaceRepo;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class FoodPlaceService {
    private final FoodPlaceRepo foodPlaceRepo;

    @Autowired
    public FoodPlaceService(FoodPlaceRepo foodPlaceRepo) {
        this.foodPlaceRepo = foodPlaceRepo;
    }

    public FoodPlace addFoodPlace(FoodPlace foodPlace) {
        return foodPlaceRepo.save(foodPlace);
    }

    public List<FoodPlace> findAllFoodPlaces() {
        return foodPlaceRepo.findAll();
    }

    public FoodPlace findFoodPlaceById(Long id) {
        return foodPlaceRepo.findFoodPlaceById(id).orElseThrow(() -> new FoodPlaceNotFoundException("Food Place not found"));
    }

    public List<FoodPlace> findFoodPlacesByCategory(String category) {
        return foodPlaceRepo.findFoodPlacesByCategory(category).orElseThrow(() -> new FoodPlaceNotFoundException("Food Place not found"));
    }

    public List<FoodPlace> findFoodPlacesByCuisine(String cuisine) {
        return foodPlaceRepo.findFoodPlacesByCuisine(cuisine).orElseThrow(() -> new FoodPlaceNotFoundException("Food Place not found"));
    }

    public FoodPlace findFoodPlaceByName(String name) {
        return foodPlaceRepo.findFoodPlaceByName(name).orElseThrow(() -> new FoodPlaceNotFoundException("Food Place not found"));
    }

    public FoodPlace updateFoodPlace(FoodPlace foodPlace) {
        return foodPlaceRepo.save(foodPlace);
    }

    public void deleteFoodPlace(Long id) {
        foodPlaceRepo.deleteFoodPlaceById(id);
    }
}
