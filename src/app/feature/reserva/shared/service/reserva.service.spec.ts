import { Reserva } from './../model/reserva';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { ReservaService } from './reserva.service';
import { environment } from 'src/environments/environment';
import { HttpResponse } from '@angular/common/http';

describe('ReservaService', () => {
  const fechaReservaTest: Date = new Date();
  const fechaEntregaTest: Date = new Date();
  let httpMock: HttpTestingController;
  let service: ReservaService;
  const apiEndpointReservas = `${environment.endpoint}/reservas`;



  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReservaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ReservaService);
  });

  it('should be created', () => {
    const reservaService: ReservaService = TestBed.inject(ReservaService);
    expect(reservaService).toBeTruthy();
  });

  it('deberia listar todas las reservas', () => {

    const dummyReservas = [
      new Reserva(1,
        '1',
        'spiderman',
        fechaReservaTest,
        1,
        fechaEntregaTest,
        25000.0,
        'Pendiente'
      ), new Reserva(2,
        '2',
        'spiderman 2',
        fechaReservaTest,
        1,
        fechaEntregaTest,
        25000.0,
        'Pendiente'
      ), new Reserva(3,
        '1',
        'spiderman 3',
        fechaReservaTest,
        1,
        fechaEntregaTest,
        25000.0,
        'Pendiente'
      )
    ];

    service.consultar().subscribe(reservas => {
      expect(reservas.length).toBe(3);
      expect(reservas).toEqual(dummyReservas);
    });
    const req = httpMock.expectOne(apiEndpointReservas);
    expect(req.request.method).toBe('GET');
    req.flush(dummyReservas);
  });

  it('deberia listar las reservas de un cliente', () => {
    const dummyReservas = [
      new Reserva(1,
        '1',
        'spiderman',
        fechaReservaTest,
        1,
        fechaEntregaTest,
        25000.0,
        'Pendiente'
      ), new Reserva(3,
        '1',
        'spiderman 3',
        fechaReservaTest,
        1,
        fechaEntregaTest,
        25000.0,
        'Pendiente'
      )
    ];
    service.consultarPorCedula('1').subscribe(reservas => {

      expect(reservas.length).toBe(2);
      expect(reservas).toEqual(dummyReservas);

    });

    const req = httpMock.expectOne(apiEndpointReservas + '/1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyReservas);
  });

  it('deberia crear una reserva', () => {
    const reservaTest: Reserva = new Reserva(1,
      '1',
      'spiderman',
      fechaReservaTest,
      1,
      fechaEntregaTest,
      25000.0,
      'Pendiente');

    service.guardar(reservaTest).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointReservas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia eliminar una reserva', () => {
    const reservaTest: Reserva = new Reserva(1,
      '1',
      'spiderman',
      fechaReservaTest,
      1,
      fechaEntregaTest,
      25000.0,
      'Pendiente');
    service.eliminar(reservaTest.idReserva).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointReservas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia modificar una reserva', () => {
    const reservaTest: Reserva = new Reserva(1,
      '1',
      'spiderman',
      fechaReservaTest,
      1,
      fechaEntregaTest,
      25000.0,
      'Pendiente');

    service.actualizar(reservaTest).subscribe((respuesta) => {
      expect(respuesta).toEqual(reservaTest);
    });
  });
});
