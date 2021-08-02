import { ReservaService } from './../../shared/service/reserva.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eliminar-reserva',
  templateUrl: './eliminar-reserva.component.html',
})
export class EliminarReservaComponent implements OnInit {
  eliminarReservaForm: FormGroup;
  idReserva: number;
  constructor(private reservaService: ReservaService,
              private router: Router,
              private toastr: ToastrService){}

  ngOnInit(): void {
    this.construirFormularioElimiarReserva();
  }

  private construirFormularioElimiarReserva() {
    this.idReserva = JSON.parse(localStorage.getItem('idReserva'));
    this.eliminarReservaForm = new FormGroup({
      idReserva: new FormControl(this.idReserva, Validators.required)
    });

  }

  eliminarReserva(){
    this.reservaService.eliminar(this.eliminarReservaForm.value.idReserva).subscribe(
      () => {
        this.eliminarReservaForm.reset();
        this.router.navigate(['reservas/listar']);
        this.toastr.success('Reserva eliminada correctamente', 'TODO CORRECTO');
      }, () => {
        this.toastr.error('Ocurrió un error al eliminar la reserva.', 'Algo salió mal...');
      }
    );
  }
}
