import { ReservaService } from './../../shared/service/reserva.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-reserva',
  templateUrl: './eliminar-reserva.component.html',
})
export class EliminarReservaComponent implements OnInit {
  eliminarReservaForm: FormGroup;
  idReserva: number;
  constructor(private _reservaService:ReservaService,
    private router: Router) { }

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
    this._reservaService.eliminar(this.eliminarReservaForm.value.idReserva).subscribe(
      ()=>{
        this.eliminarReservaForm.reset();
        this.router.navigate(['reservas/listar']);
      }
    );
  }
}
