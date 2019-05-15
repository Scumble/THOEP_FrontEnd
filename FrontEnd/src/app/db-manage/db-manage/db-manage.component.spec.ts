import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbManageComponent } from './db-manage.component';

describe('DbManageComponent', () => {
  let component: DbManageComponent;
  let fixture: ComponentFixture<DbManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
