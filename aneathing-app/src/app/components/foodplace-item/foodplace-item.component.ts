import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodPlace } from 'src/app/FoodPlace';
import {faTimes, faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-foodplace-item',
  templateUrl: './foodplace-item.component.html',
  styleUrls: ['./foodplace-item.component.css']
})
export class FoodplaceItemComponent implements OnInit {

  @Input() foodPlace: FoodPlace;
  @Output() onDeleteFoodPlace: EventEmitter<FoodPlace> = new EventEmitter();
  @Output() onEditFoodPlace: EventEmitter<FoodPlace> = new EventEmitter();
  @Output() onInfoFoodPlace: EventEmitter<FoodPlace> = new EventEmitter();
  faTimes = faTimes;
  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(foodPlace: FoodPlace) {
    this.onDeleteFoodPlace.emit(foodPlace);
  }

  onEdit(foodPlace: FoodPlace) {
    this.onEditFoodPlace.emit(foodPlace);
    //console.log("Hello");
  }

  onInfo(foodPlace: FoodPlace) {
    this.onInfoFoodPlace.emit(foodPlace);
  }

}
