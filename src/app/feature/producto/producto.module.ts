import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { BorrarProductoComponent } from './components/borrar-producto/borrar-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoService } from './shared/service/producto.service';



@NgModule({
  declarations: [
    CrearProductoComponent,
    ListarProductoComponent,
    BorrarProductoComponent,
    ProductoComponent
  ],
  imports: [
    ProductoRoutingModule,
    SharedModule
  ],
  providers: [ProductoService]
})
export class ProductoModule { }