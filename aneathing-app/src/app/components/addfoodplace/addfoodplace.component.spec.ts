import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoodplaceComponent } from './addfoodplace.component';

describe('AddfoodplaceComponent', () => {
  let component: AddfoodplaceComponent;
  let fixture: ComponentFixture<AddfoodplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfoodplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfoodplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
