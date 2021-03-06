import { ReservaService } from './../../shared/service/reserva.service';
import { Reserva } from './../../shared/model/reserva';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {

  listaReservas: Reserva[] = [];
  constructor(
    private reservaService: ReservaService,
    private router: Router) { }

  ngOnInit(): void {
    this.obtenerReservas();
  }

  obtenerReservas() {
    this.reservaService.consultar().subscribe(data => {
      this.listaReservas = data;
    });
  }

  modificarReserva(reserva: Reserva) {
    localStorage.setItem('reserva', JSON.stringify(reserva));
    this.router.navigate(['reservas/editar']);
  }

  eliminarReserva(idReserva: number) {
    localStorage.setItem('idReserva', JSON.stringify(idReserva));
    this.router.navigate(['reservas/borrar']);
  }

  cargarListaFiltrada(reservasFiltradas: Reserva[]) {
    this.listaReservas = reservasFiltradas;
  }
}
