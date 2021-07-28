import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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
    spyOn(reservaService, 'consultar').and.returnValue(
      of(listaReservas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  
});
