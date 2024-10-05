import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent implements OnInit{
  Cine!:FormGroup;
  Total!:number;
  mensaje!:string;
  nombre!:string;
  boletos!:number;

constructor(){ }
ngOnInit(): void {
  this.Cine=new FormGroup({
    nombre: new FormControl('', Validators.required),
    C_compradores: new FormControl('', Validators.required),
    opcion: new FormControl('', Validators.required),
    boletos: new FormControl('', Validators.required)
  })
}

Calcular(){
  const nombre = this.Cine.get('nombre')?.value;
  const compradores =this.Cine.get('C_compradores')?.value;
  const cineco =this.Cine.get('opcion')?.value;
  const boletos =this.Cine.get('boletos')?.value;

  this.Total = boletos * 12;

  if (compradores * 7 >= (boletos*compradores)) {
    if (boletos > 5) {
      this.Total = this.Total - (this.Total * 0.15);
    } else 
    if (boletos == 3 || boletos == 4 || boletos == 5) {
      this.Total = this.Total - (this.Total * 0.1);
    } else 
    if (boletos < 3) {
      this.Total = boletos * 12;
    }


    if (cineco === 'si') {
      this.Total = this.Total - (this.Total * 0.1);
    }

    this.mensaje=" ";
  } else {
    this.mensaje="La cantidad de boletos es superior a la especificada, solo puedes comprar 7 boletos por persona.";
    this.Total=0;
  }
  
  this.nombre = nombre;
  this.boletos = boletos;
  return this.Total;
}
}

