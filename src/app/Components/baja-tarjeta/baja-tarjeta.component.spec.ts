import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaTarjetaComponent } from './baja-tarjeta.component';

describe('BajaTarjetaComponent', () => {
  let component: BajaTarjetaComponent;
  let fixture: ComponentFixture<BajaTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
