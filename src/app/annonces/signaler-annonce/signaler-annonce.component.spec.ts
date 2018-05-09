import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalerAnnonceComponent } from './signaler-annonce.component';

describe('SignalerAnnonceComponent', () => {
  let component: SignalerAnnonceComponent;
  let fixture: ComponentFixture<SignalerAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalerAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalerAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
