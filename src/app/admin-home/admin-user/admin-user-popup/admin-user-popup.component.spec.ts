import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserPopupComponent } from './admin-user-popup.component';

describe('AdminUserPopupComponent', () => {
  let component: AdminUserPopupComponent;
  let fixture: ComponentFixture<AdminUserPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUserPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
