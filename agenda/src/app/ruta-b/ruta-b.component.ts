import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ContactosService } from '../contactos.service';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-ruta-b',
  templateUrl: './ruta-b.component.html',
  styleUrls: ['./ruta-b.component.css']
})
export class RutaBComponent{

  constructor(
    private _contactosService: ContactosService,
    private _router: Router) { }



  crearContacto(contacto: Contacto): void {
    this._contactosService.agregarContacto(contacto)
    .subscribe(() => this._router.navigate(['/lista-contactos']));  
  }

}
