import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/reservas/listar', nombre: 'Todas las reservas' },
    { url: '/reservas/crear', nombre: 'Crear reserva' },
    { url: '/reservas/borrar', nombre: 'Borrar reserva' },
    { url: '/reservas/listar-por-cedula', nombre: 'Filtrar por cédula' },
  ];
}
