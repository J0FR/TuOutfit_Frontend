import { Prenda } from '../prenda/prenda';

export class Outfit {
  id: number;
  descripcion: string;
  imagen: string;
  nombre: string;
  precio: number;
  colores: string;
  genero: string;
  ocasiones: string;
  rangoEdad: string;
  talla: string;

  constructor (id: number, descripcion: string, imagen: string, nombre: string, precio: number, colores: string, genero: string, ocasiones: string, rango_edad: string, talla: string,
    ) {
    this.id = id;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.colores = colores;
    this.genero = genero;
    this.ocasiones = ocasiones;
    this.rangoEdad = rango_edad;
    this.talla = talla;
  }
}
