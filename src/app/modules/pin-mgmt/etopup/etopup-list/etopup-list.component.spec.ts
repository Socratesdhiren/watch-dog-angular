import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtopupListComponent } from './etopup-list.component';

describe('EtopupListComponent', () => {
  let component: EtopupListComponent;
  let fixture: ComponentFixture<EtopupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtopupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtopupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
