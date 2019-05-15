import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthInfoEncodedComponent } from './health-info-encoded.component';

describe('HealthInfoEncodedComponent', () => {
  let component: HealthInfoEncodedComponent;
  let fixture: ComponentFixture<HealthInfoEncodedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthInfoEncodedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthInfoEncodedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
