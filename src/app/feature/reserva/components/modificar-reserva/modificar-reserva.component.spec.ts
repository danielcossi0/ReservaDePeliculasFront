import { ReservaService } from './../../shared/service/reserva.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ModificarReservaComponent } from './modificar-reserva.component';
import { HttpService } from '@core/services/http.service';
import { Reserva } from '@reserva/shared/model/reserva';
import { of } from 'rxjs';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ModificarReservaComponent', () => {
  let component: ModificarReservaComponent;
  let fixture: ComponentFixture<ModificarReservaComponent>;
  let reservaService: ReservaService;

  const fechaReservaTest: Date = new Date();
  const fechaEntregaTest: Date = new Date();
  const reservaModificableTest: Reserva = new Reserva(1,
    '123456789',
    'spiderman',
    fechaReservaTest,
    1,
    fechaEntregaTest,
    25000.0,
    'Pendiente'
  );

  localStorage.setItem('reserva', JSON.stringify(reservaModificableTest));

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarReservaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
      ],
      providers: [ReservaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarReservaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia tomar los datos del formulario y enviarlos al servicio de actualizar', () => {
    const reservaTest: Reserva = new Reserva(
      1,
      '1',
      'spiderman',
      fechaReservaTest,
      1,
      fechaEntregaTest,
      25000.0,
      'Pendiente');
    component.reservaActualizada = reservaTest;
    const spy = spyOn(reservaService, 'actualizar').and.returnValue(
      of(reservaModificableTest)
    );
    component.actualizar();
    expect(spy).toHaveBeenCalled();
  });
});
