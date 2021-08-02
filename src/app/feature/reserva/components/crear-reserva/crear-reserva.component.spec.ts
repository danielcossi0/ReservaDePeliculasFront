import { ReservaService } from './../../shared/service/reserva.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CrearReservaComponent } from './crear-reserva.component';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { Reserva } from '@reserva/shared/model/reserva';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CrearReservaComponent', () => {
  let component: CrearReservaComponent;
  let fixture: ComponentFixture<CrearReservaComponent>;
  let reservaService: ReservaService;
  const fechaReservaTest: Date = new Date();
  const fechaEntregaTest: Date = new Date();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearReservaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
      ],
      providers: [ReservaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReservaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia validar cuando el formulario está vacio', () => {
    expect(component.reservaForm.valid).toBeFalsy();
  });

  it('Deberia tomar los datos del formulario y enviarlos al servicio de guardar', () => {
    const reservaTest: Reserva = new Reserva(
      1,
      '1',
      'spiderman',
      fechaReservaTest,
      1,
      fechaEntregaTest,
      25000.0,
      'Pendiente');

    component.reservaForm.value.cedulaCliente = reservaTest.cedulaCliente;
    component.reservaForm.value.nombreDeLaPelicula = reservaTest.nombreDeLaPelicula;
    component.reservaForm.value.diasDeReserva = reservaTest.diasDeReserva;
    const spy = spyOn(reservaService, 'guardar').and.returnValue(
      of(true)
    );
    component.crear();
    expect(spy).toHaveBeenCalled();
});
});
