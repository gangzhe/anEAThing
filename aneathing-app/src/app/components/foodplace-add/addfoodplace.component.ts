import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FoodPlace} from 'src/app/FoodPlace';
import {UiService} from 'src/app/services/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-addfoodplace',
  templateUrl: './addfoodplace.component.html',
  styleUrls: ['./addfoodplace.component.css']
})
export class AddfoodplaceComponent implements OnInit {

  @Output() onAddFoodPlace: EventEmitter<FoodPlace> = new EventEmitter();

  id: number;
  name: string;
  category: string;
  cuisine: string;
  remarks: string;
  review: string;
  imageURL: string;
  showAddFoodPlace: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggleAdd().subscribe((value) => (this.showAddFoodPlace = value)); 
  }

  ngOnInit(): void {
  }

  onSubmit() {
      if(!this.name || !this.cuisine || !this.category) {
      alert("Name, Cuisine and Category are required!");
      return;
    }

    const newFoodPlace = {
      id: this.id,
      name: this.name,
      category: this.category,
      cuisine: this.cuisine,
      remarks: this.remarks,
      review: this.review,
      imageURL: this.imageURL
    }

    // emit event
    this.onAddFoodPlace.emit(newFoodPlace);

    this.name = '';
    this.category = '';
    this.cuisine = '';
    this.remarks = '';
    this.review = '';
    this.imageURL = '';
    
  }

}
