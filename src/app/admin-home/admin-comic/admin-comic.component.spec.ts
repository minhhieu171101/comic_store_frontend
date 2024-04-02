import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComicComponent } from './admin-comic.component';

describe('AdminComicComponent', () => {
  let component: AdminComicComponent;
  let fixture: ComponentFixture<AdminComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
