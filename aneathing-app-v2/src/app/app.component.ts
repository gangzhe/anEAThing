import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodPlace } from './FoodPlace';
import { FoodplaceService } from './services/foodplace.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public foodPlaces: FoodPlace[];
  public updateFoodPlace: FoodPlace;
  public deleteFoodPlace: FoodPlace;

  constructor(private foodPlaceService: FoodplaceService) { }

  ngOnInit() {
    this.getFoodPlaces();
  }

  public getFoodPlaces(): void {
    this.foodPlaceService.getFoodPlaces().subscribe(
      (response: FoodPlace[]) => {
        this.foodPlaces = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public onOpenModal(foodPlace: FoodPlace | null, mode: string): void {
    const container = document.getElementById('main-container');  //target the cards div
    const button = document.createElement('button');
    button.type = 'button';         //default button type is submit, which is not what we want
    button.style.display = 'none';  //hide button in the ui as this does not need to be displayed
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addFoodPlaceModal');
    }
    if (mode === 'update') {
      this.updateFoodPlace = foodPlace;
      button.setAttribute('data-target', '#updateFoodPlaceModal');
    }
    if (mode === 'delete') {
      this.deleteFoodPlace = foodPlace;
      button.setAttribute('data-target', '#deleteFoodPlaceModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddFoodPlace(addForm: NgForm): void {
    document.getElementById('add-foodplace-form').click();
    this.foodPlaceService.addFoodPlace(addForm.value).subscribe(
      (response: FoodPlace) => {
        console.log(response);
        this.getFoodPlaces();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateFoodPlace(foodPlace: FoodPlace): void {
    this.foodPlaceService.updateFoodPlace(foodPlace).subscribe(
      (response: FoodPlace) => {
        console.log(response);
        this.getFoodPlaces();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteFoodPlace(foodPlaceId: number): void {
    this.foodPlaceService.deleteFoodPlace(foodPlaceId).subscribe(
      (response: void) => {
        console.log(response);
        this.getFoodPlaces();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public searchFoodPlaces(key: string): void {
    const results: FoodPlace[] = [];
    for (const foodPlace of this.foodPlaces) {
      if (foodPlace.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 
      || foodPlace.category.toLowerCase().indexOf(key.toLowerCase()) !== -1 
      || foodPlace.cuisine.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(foodPlace);
      }
    }
    this.foodPlaces = results;
    if (results.length === 0 || !key) {
      this.getFoodPlaces();
    }
  }

}
