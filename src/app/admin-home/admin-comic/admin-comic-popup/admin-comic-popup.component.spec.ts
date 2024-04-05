import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComicPopupComponent } from './admin-comic-popup.component';

describe('AdminComicPopupComponent', () => {
  let component: AdminComicPopupComponent;
  let fixture: ComponentFixture<AdminComicPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComicPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminComicPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
