import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsMapComponent } from './hospitals-map.component';

describe('HospitalsMapComponent', () => {
  let component: HospitalsMapComponent;
  let fixture: ComponentFixture<HospitalsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
