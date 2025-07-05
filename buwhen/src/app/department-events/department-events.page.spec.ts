import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentEventsPage } from './department-events.page';

describe('DepartmentEventsPage', () => {
  let component: DepartmentEventsPage;
  let fixture: ComponentFixture<DepartmentEventsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
