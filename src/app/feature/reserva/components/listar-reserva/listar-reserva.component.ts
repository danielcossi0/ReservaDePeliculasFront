import { ReservaService } from './../../shared/service/reserva.service';
import { Reserva } from './../../shared/model/reserva';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {

  listaReservas: Reserva[] = [];
  constructor(private _reservaService: ReservaService) { }

  ngOnInit(): void {
    this.obtenerReservas();
  }

  obtenerReservas() {
    this._reservaService.consultar().subscribe(data => {
      this.listaReservas = data;
    })
  }
}
