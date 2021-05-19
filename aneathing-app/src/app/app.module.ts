import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FoodplacesComponent } from './components/foodplaces/foodplaces.component';
import { FoodplaceItemComponent } from './components/foodplace-item/foodplace-item.component';
import { AddfoodplaceComponent } from './components/foodplace-add/addfoodplace.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { FoodplaceInfoComponent } from './components/foodplace-info/foodplace-info.component';
import { FoodplaceEditComponent } from './components/foodplace-edit/foodplace-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FoodplacesComponent,
    FoodplaceItemComponent,
    AddfoodplaceComponent,
    AboutComponent,
    FooterComponent,
    SearchComponent,
    FoodplaceInfoComponent,
    FoodplaceEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
