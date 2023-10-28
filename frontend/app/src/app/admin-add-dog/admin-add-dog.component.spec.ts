import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDogComponent } from './admin-add-dog.component';

describe('AdminAddDogComponent', () => {
  let component: AdminAddDogComponent;
  let fixture: ComponentFixture<AdminAddDogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddDogComponent]
    });
    fixture = TestBed.createComponent(AdminAddDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
