import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodplaceItemComponent } from './foodplace-item.component';

describe('FoodplaceItemComponent', () => {
  let component: FoodplaceItemComponent;
  let fixture: ComponentFixture<FoodplaceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodplaceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodplaceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
