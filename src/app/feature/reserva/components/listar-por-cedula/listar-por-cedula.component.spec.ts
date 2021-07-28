import { Reserva } from './../../shared/model/reserva';
import { ReservaService } from './../../shared/service/reserva.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListarPorCedulaComponent } from './listar-por-cedula.component';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';

describe('ListarPorCedulaComponent', () => {
  let component: ListarPorCedulaComponent;
  let fixture: ComponentFixture<ListarPorCedulaComponent>;
  let reservaService: ReservaService;
  
  let fechaReservaTest: Date = new Date();
  let fechaEntregaTest: Date = new Date();
  const listaReservas: Reserva[]  = [
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

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPorCedulaComponent],
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
    fixture = TestBed.createComponent(ListarPorCedulaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'consultarPorCedula').and.returnValue(
      of(listaReservas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
});
