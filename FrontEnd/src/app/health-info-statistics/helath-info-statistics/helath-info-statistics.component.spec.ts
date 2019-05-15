import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelathInfoStatisticsComponent } from './helath-info-statistics.component';

describe('HelathInfoStatisticsComponent', () => {
  let component: HelathInfoStatisticsComponent;
  let fixture: ComponentFixture<HelathInfoStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelathInfoStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelathInfoStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
