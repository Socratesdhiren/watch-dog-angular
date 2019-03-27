import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtopupAddComponent } from './etopup-add.component';

describe('EtopupAddComponent', () => {
  let component: EtopupAddComponent;
  let fixture: ComponentFixture<EtopupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtopupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtopupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
