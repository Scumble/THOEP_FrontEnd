import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDiseasesComponent } from './manage-diseases.component';

describe('ManageDiseasesComponent', () => {
  let component: ManageDiseasesComponent;
  let fixture: ComponentFixture<ManageDiseasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDiseasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
