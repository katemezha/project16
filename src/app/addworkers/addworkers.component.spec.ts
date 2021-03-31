import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddworkersComponent } from './addworkers.component';

describe('AddworkersComponent', () => {
  let component: AddworkersComponent;
  let fixture: ComponentFixture<AddworkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddworkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
