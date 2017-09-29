import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent{

  // Con el decorador Input exponemos un atributo
  // para que un componente padre pueda enlazar datos al hijo.
  @Input() contactos: string[];

}
