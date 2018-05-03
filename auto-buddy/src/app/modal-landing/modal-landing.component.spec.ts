import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLandingComponent } from './modal-landing.component';

describe('ModalLandingComponent', () => {
  let component: ModalLandingComponent;
  let fixture: ComponentFixture<ModalLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
