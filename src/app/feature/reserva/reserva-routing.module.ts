import { EliminarReservaComponent } from './components/eliminar-reserva/eliminar-reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ListarPorCedulaComponent } from './components/listar-por-cedula/listar-por-cedula.component';


const routes: Routes = [
  {

    path: '',
    component: ReservaComponent,
    children: [
      {
        path: 'crear',
        component: CrearReservaComponent
      },
      {
        path: 'listar',
        component: ListarReservaComponent
      },
      {
        path: 'borrar',
        component: EliminarReservaComponent
      },
      {
        path: 'listar-por-cedula',
        component: ListarPorCedulaComponent
      },
    ]

  }


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
