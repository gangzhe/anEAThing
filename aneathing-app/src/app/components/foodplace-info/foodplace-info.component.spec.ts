import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodplaceInfoComponent } from './foodplace-info.component';

describe('FoodplaceInfoComponent', () => {
  let component: FoodplaceInfoComponent;
  let fixture: ComponentFixture<FoodplaceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodplaceInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodplaceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
