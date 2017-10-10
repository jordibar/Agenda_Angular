import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Contacto } from './contacto';

// El decorador @Injectable indica que la clase decorada
// debe comportarse como un servicio
@Injectable()
export class ContactosService {

  constructor(private _httpClient: HttpClient) { }

 

    obtenerContactos(): Observable<Contacto[]> {
      return this._httpClient.get<Contacto[]>('http://localhost:3004/contactos');
    }

    agregarContacto( contacto: Contacto ):  Observable<Contacto> {
      return this._httpClient.post<Contacto>('http://localhost:3004/contactos', contacto);
    }


    eliminarContacto(contacto: Contacto): Observable<Contacto> {
      return this._httpClient.delete<Contacto>(`http://localhost:3004/contactos/${contacto.id}`);
    }

}
