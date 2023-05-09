import { Outfit } from "../outfit/outfit";

export class Prenda {
    id: number;
    nombre: string;
    imagen: string;
    colores: string;
    genero: string;
    precio : number;
    ocasiones: string;
    rango_edad: string;
    talla: string;
    constructor(id: number, nombre: string, imagen: string, colores: string, genero: string, precio: number, ocasiones: string, rango_edad: string, talla: string) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.colores = colores;
        this.genero = genero;
        this.precio = precio;
        this.ocasiones = ocasiones;
        this.rango_edad = rango_edad;
        this.talla = talla;
    }
  }
