import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReservaService {

  constructor(
    protected http: HttpService,
    private httpClient: HttpClient) { }

  public guardar(reserva: Reserva) {
    return this.http.doPost<Reserva, boolean>(`${environment.endpoint}/reservas`, reserva,
      this.http.optsName('crear reserva'));
  }

  public consultar() {
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas`,
      this.http.optsName('consultar reservas'));
  }

  public consultarPorCedula(cedula: string) {
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas/${cedula}`,
      this.http.optsName('listar por cedula'));
  }

  public eliminar(idReserva: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/reservas/${idReserva}`,
      this.http.optsName('eliminar reserva'));
  }

  public actualizar(reserva: Reserva) {
    return this.httpClient.put<Reserva>(`${environment.endpoint}/reservas/${reserva.idReserva}`,
      reserva);
  }
}
