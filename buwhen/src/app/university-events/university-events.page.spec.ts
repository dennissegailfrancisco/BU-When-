import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniversityEventsPage } from './university-events.page';

describe('UniversityEventsPage', () => {
  let component: UniversityEventsPage;
  let fixture: ComponentFixture<UniversityEventsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
