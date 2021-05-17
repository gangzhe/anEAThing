import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddFoodPlace: boolean = false;
  private showSearchFoodPlace: boolean = false;
  private addSubject = new Subject<any>();
  private searchSubject = new Subject<any>();

  constructor() { }

  toggleAddFoodPlace(): void {
    this.showAddFoodPlace = !this.showAddFoodPlace;
    this.addSubject.next(this.showAddFoodPlace);
  }

  toggleSearchFoodPlace(): void {
    this.showSearchFoodPlace = !this.showSearchFoodPlace;
    this.searchSubject.next(this.showSearchFoodPlace);
  }

  onToggleAdd(): Observable<any> {
    return this.addSubject.asObservable();
  }

  onToggleSearch(): Observable<any> {
    return this.searchSubject.asObservable();
  }
}
