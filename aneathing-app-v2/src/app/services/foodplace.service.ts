import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodPlace } from '../FoodPlace';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class FoodplaceService {

  private apiUrl = 'http://localhost:8080/aneathing';

  constructor(private http: HttpClient) { }

  public getFoodPlaces(): Observable<FoodPlace[]> {
    return this.http.get<FoodPlace[]>(`${this.apiUrl}/all`);
  }

  public addFoodPlace(foodPlace: FoodPlace): Observable<FoodPlace> {
    return this.http.post<FoodPlace>(`${this.apiUrl}/add`, foodPlace, httpOptions);
  }

  public updateFoodPlace(foodPlace: FoodPlace): Observable<FoodPlace> {
    return this.http.put<FoodPlace>(`${this.apiUrl}/update/${foodPlace.id}`, foodPlace, httpOptions);
  }

  public searchFoodPlaceById(foodPlaceId: number): Observable<FoodPlace> {
    return this.http.get<FoodPlace>(`${this.apiUrl}/findbyid/${foodPlaceId}`);
  }

  public searchFoodPlaceByName(foodPlaceName: string): Observable<FoodPlace> {
    return this.http.get<FoodPlace>(`${this.apiUrl}/findbyname/${foodPlaceName}`);
  }

  public searchFoodPlacesByCategory(foodPlaceCategory: string): Observable<FoodPlace[]> {
    return this.http.get<FoodPlace[]>(`${this.apiUrl}/findbycategory/${foodPlaceCategory}`);
  }

  public searchFoodPlacesByCuisine(foodPlaceCuisine: FoodPlace): Observable<FoodPlace[]> {
    return this.http.get<FoodPlace[]>(`${this.apiUrl}/findbycuisine/${foodPlaceCuisine}`);
  }

  public deleteFoodPlace(foodPlaceId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${foodPlaceId}`);
  }
}
