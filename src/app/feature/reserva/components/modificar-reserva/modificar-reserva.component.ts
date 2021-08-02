import { ReservaService } from './../../shared/service/reserva.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Reserva } from '@reserva/shared/model/reserva';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


const LONGITUD_MAXIMA_PERMITIDA_CEDULA = 15;
const LONGITUD_MAXIMA_PERMITIDA_NOMBRE_DE_PELICULA = 99;
const DIAS_MAXIMOS_DE_RESERVA_PERMITIDOS = 5;

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
})
export class ModificarReservaComponent implements OnInit {
  reservaForm: FormGroup;
  constructor(
    protected reservaServices: ReservaService,
    private router: Router,
    private toastr: ToastrService) { }
  reserva: Reserva;
  reservaActualizada: Reserva;
  ngOnInit(): void {

    this.construirFormularioEditarReserva();
  }

  private construirFormularioEditarReserva() {

    this.reserva = JSON.parse(localStorage.getItem('reserva'));

    this.reservaForm = new FormGroup({
      cedulaCliente: new FormControl(this.reserva.cedulaCliente, Validators.compose([Validators.required,
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_CEDULA)])),

      nombreDeLaPelicula: new FormControl(this.reserva.nombreDeLaPelicula, Validators.compose([Validators.required,
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_NOMBRE_DE_PELICULA)])),

      fechaDeReserva: new FormControl(this.reserva.fechaDeReserva),

      diasDeReserva: new FormControl(this.reserva.diasDeReserva, Validators.compose([Validators.required,
      Validators.max(DIAS_MAXIMOS_DE_RESERVA_PERMITIDOS)])),

      fechaDeEntrega: new FormControl(this.reserva.fechaDeEntrega),

      precioCalculado: new FormControl(this.reserva.precioCalculado),

      estado: new FormControl(this.reserva.estado)
    });

  }

  actualizar() {

    this.reservaActualizada = this.reservaForm.value;
    this.reservaActualizada.idReserva = this.reserva.idReserva;

    this.reservaServices.actualizar(this.reservaActualizada).subscribe(
      () => {
        this.router.navigate(['reservas/listar']);

        this.toastr.success('Modificación registrada correctamente', 'TODO CORRECTO');
      }, () => {
        this.toastr.error('Ocurrió un error al actualizar.', 'Algo salió mal...');
      }
    );
  }
}
