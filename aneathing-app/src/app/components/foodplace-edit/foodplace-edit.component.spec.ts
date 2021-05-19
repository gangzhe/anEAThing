import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodplaceEditComponent } from './foodplace-edit.component';

describe('FoodplaceEditComponent', () => {
  let component: FoodplaceEditComponent;
  let fixture: ComponentFixture<FoodplaceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodplaceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodplaceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
