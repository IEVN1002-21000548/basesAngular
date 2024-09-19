import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

productos:any[]=[
  {
    "producto_id":1,
    "Modelo":"Sntra",
    "Descripcion":"4 puertas",
    "Precio":20000,
    "Year":2023,
    "Marca":"Kya",
    "Color":"Azul",
    "ImagenUrl":""
  },
  {
    "producto_id":2,
    "Modelo":"Audi",
    "Descripcion":"4 puertas",
    "Precio":20000,
    "Year":2023,
    "Marca":"Audi",
    "Color":"Blanco",
    "ImagenUrl":""
  },
  {
    "producto_id":3,
    "Modelo":"Sntra",
    "Descripcion":"4 puertas",
    "Precio":20000,
    "Year":2023,
    "Marca":"Kya",
    "Color":"Azul",
    "ImagenUrl":""
  }
]
}