import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { EliminarReservaComponent } from './components/eliminar-reserva/eliminar-reserva.component';
import { ListarReservaComponent } from './components/listar-reserva/listar-reserva.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaService } from './shared/service/reserva.service';



@NgModule({
  declarations: [
    CrearReservaComponent,
    EliminarReservaComponent,
    ListarReservaComponent,
    ReservaComponent
  ],
  imports: [
    ReservaRoutingModule,
    SharedModule,
  ],
  providers: [ReservaService]
})
export class ReservaModule { }
