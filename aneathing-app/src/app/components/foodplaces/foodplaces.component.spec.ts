import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodplacesComponent } from './foodplaces.component';

describe('FoodplacesComponent', () => {
  let component: FoodplacesComponent;
  let fixture: ComponentFixture<FoodplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodplacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
