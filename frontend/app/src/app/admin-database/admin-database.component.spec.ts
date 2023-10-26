import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDatabaseComponent } from './admin-database.component';

describe('AdminDatabaseComponent', () => {
  let component: AdminDatabaseComponent;
  let fixture: ComponentFixture<AdminDatabaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDatabaseComponent]
    });
    fixture = TestBed.createComponent(AdminDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
