import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Reserva } from '@reserva/shared/model/reserva';
import { ReservaService } from '@reserva/shared/service/reserva.service';
import { of } from 'rxjs';

import { ListarReservaComponent } from './listar-reserva.component';

describe('ListarReservaComponent', () => {
  let component: ListarReservaComponent;
  let fixture: ComponentFixture<ListarReservaComponent>;
  let reservaService: ReservaService;
  let router: Router;

  const fechaReservaTest: Date = new Date();
  const fechaEntregaTest: Date = new Date();
  const listaReservas: Reserva[] = [
    new Reserva(1,
      '123456789',
      'spiderman',
      fechaReservaTest,
      1,
      fechaEntregaTest,
      25000.0,
      'Pendiente'
    ), new Reserva(2,
      '123456789',
      'spiderman 2',
      fechaReservaTest,
      1,
      fechaEntregaTest,
      25000.0,
      'Pendiente'
    )
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarReservaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ReservaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    router = TestBed.inject(Router);
    spyOn(reservaService, 'consultar').and.returnValue(
      of(listaReservas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia enviar los datos de la reserva para mostrarlos despues del redireccionamiento', () => {
    const reservaTest: Reserva = new Reserva(
      1,
      '1',
      'spiderman',
      fechaReservaTest,
      1,
      fechaEntregaTest,
      25000.0,
      'Pendiente');
    const spy = spyOn(router, 'navigate');
    component.modificarReserva(reservaTest);
    expect(spy).toHaveBeenCalled();
  });

  it('Deberia enviar el id de la reserva para mostrarlo despues del redireccionamiento', () => {
    const idReservaTest = 1;
    const spy = spyOn(router, 'navigate');
    component.eliminarReserva(idReservaTest);
    expect(spy).toHaveBeenCalled();
  });
});
