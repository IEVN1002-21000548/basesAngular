import { UrlCodec } from '@angular/common/upgrade';
import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {

imageWidth:number=60;
imageMargin:number=2;
muestraImg:boolean=true;
listFilter:string='';

muestImg():void{
  this.muestraImg=this.muestraImg;
}

  //*ngIf=true o false
productos:IProductos=[
  {
    "producto_id":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas",
    "Precio":20000,
    "Year":"Octubre 24 20023",
    "Marca":"Kya",
    "Color":"Naranja",
    "ImagenUrl":"https://th.bing.com/th/id/OIP._Xgyj7KPilfwUyCKIZVaGwAAAA?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    "producto_id":2,
    "Modelo":"Audi",
    "Descripcion":"4 puertas",
    "Precio":20000,
    "Year":"Octubre 24 20023",
    "Marca":"Audi",
    "Color":"Rojo",
    "ImagenUrl":"https://th.bing.com/th/id/R.aecb55fc4993ee4332a5ac147c3a1aa8?rik=h%2bTogZhlYuUuxQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f9%2f97%2fAudi_A1.jpg&ehk=TjzJus6E3hT5EXCpzRdjWn5wx8ikVyffAZvb4VmHRlc%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "producto_id":3,
    "Modelo":"Bocho",
    "Descripcion":"Esta chido",
    "Precio":200,
    "Year":"Octubre 24 20023",
    "Marca":"Mercedes Benz",
    "Color":"Rosa",
    "ImagenUrl":"https://th.bing.com/th/id/OIP.L8E-CuJTEeJVuhTANeRNDQHaE9?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  }
]
}