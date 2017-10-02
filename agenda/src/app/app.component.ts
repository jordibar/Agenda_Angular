import { Component, OnInit } from '@angular/core';


// Con el decorador @Component otorgamos a la clase
// decorada comportamiento de componente
@Component({
  // El metadato selector indica el selector CSS encargado
  // de seleccionar el elemento HTML en el cual instanciar
  // el componente
  selector: 'app-root',
  // En templateUrl indicamos la ruta al template (html)
  // asociado al componente
  templateUrl: './app.component.html',
  // En styleUrls indicamos las rutas de las hojas de estilo
  // que aplican al componente
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Creamos los contactos de la agenda
  nombres: string[] = [
    "Steve Jobs",
    "Steve Wozniak",
    "Bill Gates",
    "Sunder Pichai",
    "Elon Musk",
    "Bob Esponja"
  ];

  constructor() {
    console.log('Estoy en el constructor!');
  }

  // El hook OnInit se ejecuta cuando en el componente tiene
  // asociado su template correspondiente, por tanto, es el 
  // momento ideal para enlazar datos entre ellos.
  ngOnInit(): void {
    console.log ('Estoy en el hook OnInit');
  }
}
