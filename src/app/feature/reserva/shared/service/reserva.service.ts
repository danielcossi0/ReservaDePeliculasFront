import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';

@Injectable()
export class ReservaService {

  constructor(protected http: HttpService) { }

  public guardar(reserva: Reserva) {
    console.log("guardar reserva: "+ reserva);
    return this.http.doPost<Reserva, boolean>(`${environment.endpoint}/reservas`, reserva,
      this.http.optsName('crear reserva'));
  }

  public consultar() {
    
    console.log("listar reservas");
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas`, this.http.optsName('consultar reservas'));
  }

  public consultarPorCedula(cedula: string) {
    
    console.log("listar por cedula" + `${environment.endpoint}/reservas/${cedula}`);
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas/${cedula}`, this.http.optsName('listar por cedula'));
  }
 
  public eliminar(idReserva: number) {    
    console.log("eliminar reserva: "+ idReserva);
    return this.http.doDelete<boolean>(`${environment.endpoint}/reservas/${idReserva}`,
      this.http.optsName('eliminar reserva'));
  }
}
