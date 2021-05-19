import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FoodPlace} from '../../FoodPlace';
import {FoodplaceService} from 'src/app/services/foodplace.service';
import {UiService} from 'src/app/services/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onSearchFoodPlaceByName: EventEmitter<FoodPlace> = new EventEmitter();

  name: string;
  cuisine: string;
  category: string;
  showSearchFoodPlace: boolean;
  subscription: Subscription;

  constructor(private foodPlaceService: FoodplaceService, private uiService: UiService) { 
    this.subscription = this.uiService.onToggleSearch().subscribe((value) => (this.showSearchFoodPlace = value));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.name && !this.cuisine && !this.category) {
      alert("Please enter something!");
      return;
    }

    const foundFoodPlaces: FoodPlace[] = [];

    // emit event
    //this.onSearchFoodPlaceByName.emit(this.name);
    console.log("Search submitted");

    this.name = '';
    this.category = '';
    this.cuisine = '';
  }
  
}
