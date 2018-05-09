import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesSinaleesComponent } from './annonces-sinalees.component';

describe('AnnoncesSinaleesComponent', () => {
  let component: AnnoncesSinaleesComponent;
  let fixture: ComponentFixture<AnnoncesSinaleesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoncesSinaleesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesSinaleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
