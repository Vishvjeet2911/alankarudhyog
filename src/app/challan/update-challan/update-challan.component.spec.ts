import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChallanComponent } from './update-challan.component';

describe('UpdateChallanComponent', () => {
  let component: UpdateChallanComponent;
  let fixture: ComponentFixture<UpdateChallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChallanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
