import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FoodplaceInfoComponent } from './components/foodplace-info/foodplace-info.component';
import { FoodplacesComponent } from './components/foodplaces/foodplaces.component';

const routes: Routes = [
  {path: '', component: FoodplacesComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
