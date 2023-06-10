import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadComponent } from './road.component';

describe('RoadComponent', () => {
  let component: RoadComponent;
  let fixture: ComponentFixture<RoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoadComponent]
    });
    fixture = TestBed.createComponent(RoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
