import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ReservaService } from '@reserva/shared/service/reserva.service';

import { EliminarReservaComponent } from './eliminar-reserva.component';

describe('EliminarReservaComponent', () => {
  let component: EliminarReservaComponent;
  let fixture: ComponentFixture<EliminarReservaComponent>;
  let reservaService: ReservaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarReservaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ReservaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarReservaComponent);
    component = fixture.componentInstance;
    
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'eliminar');
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
 
});
