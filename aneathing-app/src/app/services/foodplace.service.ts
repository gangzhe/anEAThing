import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FoodPlace} from 'src/app/FoodPlace';
import {FOODPLACES} from 'src/app/mock-foodplaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class FoodplaceService {

  private apiUrl = 'http://localhost:8080/aneathing/';

  constructor(private http:HttpClient) { }

  getFoodPlaces(): Observable<FoodPlace[]> {
    return this.http.get<FoodPlace[]>(this.apiUrl + 'all');
  }

  searchFoodPlaceById(foodPlace: FoodPlace): Observable<FoodPlace> {
    const url = `${this.apiUrl}/findbyid/${foodPlace.id}`;
    return this.http.get<FoodPlace>(url);
  }

  searchFoodPlaceByName(foodPlace: FoodPlace): Observable<FoodPlace> {
    const url = `${this.apiUrl}/findbyname/${foodPlace.name}`;
    return this.http.get<FoodPlace>(url);
  }

  searchFoodPlacesByCategory(foodPlace: FoodPlace): Observable<FoodPlace> {
    const url = `${this.apiUrl}/findbycategory/${foodPlace.category}`;
    return this.http.get<FoodPlace>(url);
  }

  searchFoodPlaceByCuisine(foodPlace: FoodPlace): Observable<FoodPlace> {
    const url = `${this.apiUrl}/findbycuisine/${foodPlace.cuisine}`;
    return this.http.get<FoodPlace>(url);
  }

  deleteFoodPlace(foodPlace: FoodPlace): Observable<FoodPlace> {
    const url = `${this.apiUrl}/delete/${foodPlace.id}`;
    return this.http.delete<FoodPlace>(url);
  }

  addFoodPlace(foodPlace: FoodPlace): Observable<FoodPlace> {
    return this.http.post<FoodPlace>(this.apiUrl+'add', foodPlace, httpOptions);
  }

  editFoodPlace(foodPlace: FoodPlace): Observable<FoodPlace> {
    const url = `${this.apiUrl}/update/${foodPlace.id}`;
    return this.http.put<FoodPlace>(url, foodPlace, httpOptions);
  }

}
