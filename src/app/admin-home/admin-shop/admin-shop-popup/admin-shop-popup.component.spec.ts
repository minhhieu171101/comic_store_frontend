import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShopPopupComponent } from './admin-shop-popup.component';

describe('AdminShopPopupComponent', () => {
  let component: AdminShopPopupComponent;
  let fixture: ComponentFixture<AdminShopPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminShopPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminShopPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
