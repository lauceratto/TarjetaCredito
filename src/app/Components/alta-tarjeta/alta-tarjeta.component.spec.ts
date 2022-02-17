import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTarjetaComponent } from './alta-tarjeta.component';

describe('AltaTarjetaComponent', () => {
  let component: AltaTarjetaComponent;
  let fixture: ComponentFixture<AltaTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
