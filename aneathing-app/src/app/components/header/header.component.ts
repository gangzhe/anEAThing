import { Component, OnInit } from '@angular/core';
import {UiService} from 'src/app/services/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Eat What? anEAThing!';
  showAddFoodPlace: boolean = false;
  showSearchFoodPlace: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) { 
    this.subscription = this.uiService.onToggleAdd().subscribe((value) => (this.showAddFoodPlace = value));
    this.subscription = this.uiService.onToggleSearch().subscribe((value) => (this.showSearchFoodPlace = value));
  }

  ngOnInit(): void {
  }

  toggleAddFoodPlace() {
    this.uiService.toggleAddFoodPlace();
  }

  toggleSearchFoodPlace() {
    this.uiService.toggleSearchFoodPlace();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
