import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingFieldComponent } from './working-field.component';

describe('WorkingFieldComponent', () => {
  let component: WorkingFieldComponent;
  let fixture: ComponentFixture<WorkingFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingFieldComponent]
    });
    fixture = TestBed.createComponent(WorkingFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
