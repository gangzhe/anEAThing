package personal.aneathing.aneathing.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import personal.aneathing.aneathing.model.FoodPlace;
import personal.aneathing.aneathing.service.FoodPlaceService;

import java.security.PublicKey;
import java.util.List;

@RestController
@RequestMapping("/aneathing")
public class FoodPlaceController {
    private final FoodPlaceService foodPlaceService;

    public FoodPlaceController(FoodPlaceService foodPlaceService) {
        this.foodPlaceService = foodPlaceService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<FoodPlace>> getAllFoodPlaces() {
        List<FoodPlace> foodPlaces = foodPlaceService.findAllFoodPlaces();
        return new ResponseEntity<>(foodPlaces, HttpStatus.OK);
    }

    @GetMapping("/findbyid/{id}")
    public ResponseEntity<FoodPlace> getFoodPlaceById(@PathVariable("id") Long id) {
        FoodPlace foodPlace = foodPlaceService.findFoodPlaceById(id);
        return new ResponseEntity<>(foodPlace, HttpStatus.OK);
    }

    @GetMapping("/findbycategory/{category}")
    public ResponseEntity<List<FoodPlace>> getFoodPlacesByCategory(@PathVariable("category") String category) {
        List<FoodPlace> foodPlaces = foodPlaceService.findFoodPlacesByCategory(category);
        return new ResponseEntity<>(foodPlaces, HttpStatus.OK);
    }

    @GetMapping("/findbycuisine/{cuisine}")
    public ResponseEntity<List<FoodPlace>> getFoodPlacesByCuisine(@PathVariable("cuisine") String cuisine) {
        List<FoodPlace> foodPlaces = foodPlaceService.findFoodPlacesByCuisine(cuisine);
        return new ResponseEntity<>(foodPlaces, HttpStatus.OK);
    }

    @GetMapping("/findbyname/{name}")
    public ResponseEntity<FoodPlace> getFoodPlaceByName(@PathVariable("name") String name) {
        FoodPlace foodPlace = foodPlaceService.findFoodPlaceByName(name);
        return new ResponseEntity<>(foodPlace, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<FoodPlace> addFoodPlace(@RequestBody FoodPlace foodPlace) {
        FoodPlace newFoodPlace = foodPlaceService.addFoodPlace(foodPlace);
        return new ResponseEntity<>(newFoodPlace, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<FoodPlace> updateFoodPlace(@RequestBody FoodPlace foodPlace, @PathVariable("id") Long id) {
        FoodPlace updatedFoodPlace = foodPlaceService.updateFoodPlace(foodPlace);
        return new ResponseEntity<>(updatedFoodPlace, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteFoodPlace(@PathVariable("id") Long id) {
        foodPlaceService.deleteFoodPlace(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
