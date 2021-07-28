import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../model/reserva';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReservaService {

  constructor(protected http: HttpService,
    private httpClient:HttpClient) { }

  public guardar(reserva: Reserva) {
    console.log("guardar reserva: "+ reserva);
    return this.http.doPost<Reserva, boolean>(`${environment.endpoint}/reservas`, reserva,
      this.http.optsName('crear reserva'));
  }

  public consultar() {
    
    console.log("listar reservas");
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas`, 
    this.http.optsName('consultar reservas'));
  }

  public consultarPorCedula(cedula: string) {
    
    console.log("listar por cedula" + `${environment.endpoint}/reservas/${cedula}`);
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas/${cedula}`, 
    this.http.optsName('listar por cedula'));
  }
 
  public eliminar(idReserva: number) {    
    console.log("eliminar reserva: "+ idReserva);
    return this.http.doDelete<boolean>(`${environment.endpoint}/reservas/${idReserva}`,
      this.http.optsName('eliminar reserva'));
  }

  public actualizar(reserva:Reserva){
    console.log("actualizar reserva: "+ reserva);
    console.log("actualizar reserva: "+ `${environment.endpoint}/reservas/${reserva.idReserva}`);
    return this.httpClient.put<Reserva>(`${environment.endpoint}/reservas/${reserva.idReserva}`, 
    reserva);
  }
}
