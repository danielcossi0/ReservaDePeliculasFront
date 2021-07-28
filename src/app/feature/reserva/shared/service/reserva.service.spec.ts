import { Reserva } from './../model/reserva';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { ReservaService } from './reserva.service';
import { environment } from 'src/environments/environment';

describe('ReservaService', () => {
  let fechaReservaTest: Date = new Date();
  let fechaEntregaTest: Date = new Date();
  let httpMock: HttpTestingController;
  let service: ReservaService;
  const apiEndpointReservasConsulta = `${environment.endpoint}/reservas`;

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
 
  it('deberia listar todas las reservas', ()=>{

    const dummyReservas = [
      new Reserva(1,
        "123456789",
        "spiderman",
        fechaReservaTest,
        1,
        fechaEntregaTest,
        25000.0,
        "Pendiente"
      ), new Reserva(2,
        "123456789",
        "spiderman 2",
        fechaReservaTest,
        1,
        fechaEntregaTest,
        25000.0,
        "Pendiente"
      )
    ];

    service.consultar().subscribe(reservas => {
      expect(reservas.length).toBe(2);
      expect(reservas).toEqual(dummyReservas);
    });
    const req = httpMock.expectOne(apiEndpointReservasConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyReservas);
  });
/*
  it('deberia listar las reservas de un cliente', ()=>{
    
  });
  
  it('deberia crear una reserva', ()=>{
    
  });

  it('deberia eliminar una reserva', ()=>{
    
  });

  it('deberia modificar una reserva', ()=>{
    
  });
*/
});
