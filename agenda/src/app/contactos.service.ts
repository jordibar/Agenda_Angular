import { Injectable } from '@angular/core';

import { Contacto } from './contacto';

// El decorador @Injectable indica que la clase decorada
// debe comportarse como un servicio
@Injectable()
export class ContactosService {

    // Creamos los contactos de la agenda
    private _nombres: Contacto[] = [
      new Contacto(1, 'Steve', 'Jobs'),
      new Contacto(2, 'Steve', 'Wozniak'),
      new Contacto(3, 'Bill', 'Gates'),
      new Contacto(4, 'Sunder', 'Pichai'),
      new Contacto(5, 'Elon', 'Musk'),
      new Contacto(6, 'Bob', 'Esponja')
    ];

    obtenerContactos(): Contacto[] {
      return this._nombres;
    }

    eliminarContacto(nombre: Contacto): void {
      // Esto es JS no Angular
      // Para eliminar el contacto indicado lo que hacemos es
      // filtrar la colección de contactos y quedarnos con todos
      // aquellos que no sean el indicado.
      this._nombres = this._nombres.filter(n => (n.id) !== nombre.id);
    }

}
