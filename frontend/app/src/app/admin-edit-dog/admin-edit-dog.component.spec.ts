import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDogComponent } from './admin-edit-dog.component';

describe('AdminEditDogComponent', () => {
  let component: AdminEditDogComponent;
  let fixture: ComponentFixture<AdminEditDogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditDogComponent]
    });
    fixture = TestBed.createComponent(AdminEditDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
