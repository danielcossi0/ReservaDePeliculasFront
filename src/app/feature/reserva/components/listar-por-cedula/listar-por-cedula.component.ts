import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservaService } from './../../shared/service/reserva.service';
import { Reserva } from './../../shared/model/reserva';

@Component({
  selector: 'app-listar-por-cedula',
  templateUrl: './listar-por-cedula.component.html',
  styleUrls: ['./listar-por-cedula.component.css']
})

export class ListarPorCedulaComponent implements OnInit {

  @Output() listaFiltrada = new EventEmitter<Reserva[]>();

  listaPorCedulaForm: FormGroup;
  listaReservas: Reserva[] = [];
  cedulaCliente: string;

  constructor(private _reservaService: ReservaService) { }

  ngOnInit(): void {
    this.construirFormularioReservasPorCedula();
    this.obtenerReservas();
  }

  obtenerReservas() {
    this.cedulaCliente = this.listaPorCedulaForm.value.cedulaCliente;
    this._reservaService.consultarPorCedula(this.cedulaCliente).subscribe(data => {
      this.listaReservas = data;
    });
  }

  private construirFormularioReservasPorCedula() {
    this.listaPorCedulaForm = new FormGroup({
      cedulaCliente: new FormControl('', Validators.required)
    });
  }

  emitirListaFiltrada() {
    this.listaFiltrada.emit(this.listaReservas);
  }
}
