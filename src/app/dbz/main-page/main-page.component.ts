import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private dbzService: dbzService){

  }

  ngOnInit(): void {
  }

  nuevo:Personaje={
    nombre: "Maestro Roshi",
    poder: 100
  }


  agregarNuevoPersonaje(argumento:Personaje){
    //this.personajes.push(argumento);
  }
}
