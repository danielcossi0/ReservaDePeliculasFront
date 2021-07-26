import { Reserva } from './../../shared/model/reserva';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {

  listaReservas: Reserva[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  

}
