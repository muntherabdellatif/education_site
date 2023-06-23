import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingFieldsComponent } from './working-fields.component';

describe('WorkingFieldsComponent', () => {
  let component: WorkingFieldsComponent;
  let fixture: ComponentFixture<WorkingFieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingFieldsComponent]
    });
    fixture = TestBed.createComponent(WorkingFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
