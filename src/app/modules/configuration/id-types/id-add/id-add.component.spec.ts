import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdAddComponent } from './id-add.component';

describe('IdAddComponent', () => {
  let component: IdAddComponent;
  let fixture: ComponentFixture<IdAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
