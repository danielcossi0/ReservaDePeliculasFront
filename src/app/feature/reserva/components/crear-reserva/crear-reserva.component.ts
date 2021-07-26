import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservaService } from './../../shared/service/reserva.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


const LONGITUD_MAXIMA_PERMITIDA_CEDULA = 15;
const LONGITUD_MAXIMA_PERMITIDA_NOMBRE_DE_PELICULA = 99;
const DIAS_MAXIMOS_DE_RESERVA_PERMITIDOS = 5;

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {

  reservaForm: FormGroup;
  constructor(protected _reservaServices: ReservaService,
    private router: Router) { }

  ngOnInit() {
    this.construirFormularioReserva();
  }

  crear() {
    this._reservaServices.guardar(this.reservaForm.value).subscribe(
      ()=>{
        this.reservaForm.reset();
        this.router.navigate(['reservas/listar']);
      }
    );
  }

  private construirFormularioReserva() {
    this.reservaForm = new FormGroup({
      cedulaCliente: new FormControl('', Validators.compose([Validators.required,
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_CEDULA)])),

      nombreDeLaPelicula: new FormControl('', Validators.compose([Validators.required,
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_NOMBRE_DE_PELICULA)])),

      diasDeReserva: new FormControl('', Validators.compose([Validators.required,
      Validators.max(DIAS_MAXIMOS_DE_RESERVA_PERMITIDOS)])),
    })

  }
}
