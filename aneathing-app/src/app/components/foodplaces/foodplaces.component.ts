import { Component, OnInit } from '@angular/core';
import {FoodPlace} from '../../FoodPlace';
import {FoodplaceService} from 'src/app/services/foodplace.service';

@Component({
  selector: 'app-foodplaces',
  templateUrl: './foodplaces.component.html',
  styleUrls: ['./foodplaces.component.css']
})
export class FoodplacesComponent implements OnInit {

  foodPlaces: FoodPlace[] = [];

  constructor(private foodPlaceService: FoodplaceService) { }

  ngOnInit(): void {
    this.foodPlaceService.getFoodPlaces().subscribe((foodPlaces) => (this.foodPlaces = foodPlaces));
  }

  deleteFoodPlace(foodPlace: FoodPlace) {
    this.foodPlaceService.deleteFoodPlace(foodPlace).subscribe(() => (this.foodPlaces = this.foodPlaces.filter((f) => f.id !== foodPlace.id)));
  }

  addFoodPlace(foodPlace: FoodPlace) {
    this.foodPlaceService.addFoodPlace(foodPlace).subscribe((foodPlace) => (this.foodPlaces.push(foodPlace)));
  }

  editFoodPlace(foodPlace: FoodPlace) {
    console.log("foodplace: Hello");
    this.foodPlaceService.editFoodPlace(foodPlace).subscribe();
  }

  searchFoodPlaceById(foodPlace: FoodPlace) {
    this.foodPlaceService.searchFoodPlaceById(foodPlace).subscribe(() => (this.foodPlaces = this.foodPlaces.filter((f) => f.id !== foodPlace.id)));
  }

  searchFoodPlaceByName(foodPlace: FoodPlace) {
    this.foodPlaceService.searchFoodPlaceByName(foodPlace).subscribe(() => (this.foodPlaces = this.foodPlaces.filter((f) => f.name !== foodPlace.name)));
  }

  searchFoodPlacesByCategory(foodPlace: FoodPlace) {
    this.foodPlaceService.searchFoodPlacesByCategory(foodPlace).subscribe(() => (this.foodPlaces = this.foodPlaces.filter((f) => f.category !== foodPlace.category)));
  }

  searchFoodPlacesByCuisine(foodPlace: FoodPlace) {
    this.foodPlaceService.searchFoodPlaceByCuisine(foodPlace).subscribe(() => (this.foodPlaces = this.foodPlaces.filter((f) => f.cuisine !== foodPlace.cuisine)));
  }
}
