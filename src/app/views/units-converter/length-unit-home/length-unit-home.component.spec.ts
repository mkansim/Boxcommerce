import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthUnitHomeComponent } from './length-unit-home.component';

describe('LengthUnitHomeComponent', () => {
  let component: LengthUnitHomeComponent;
  let fixture: ComponentFixture<LengthUnitHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LengthUnitHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthUnitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
