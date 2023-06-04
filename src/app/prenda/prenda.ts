import { Marca } from '../marca/marca';

export class Prenda {
    id: number;
    nombre: string;
    imagen: string;
    colores: string;
    genero: string;
    precio : number;
    ocasiones: string;
    rangoEdad: string;
    talla: string;
    marca: Marca;
    constructor(id: number, nombre: string, imagen: string, colores: string, genero: string, precio: number, ocasiones: string, rango_edad: string, talla: string, marca: Marca) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.colores = colores;
        this.genero = genero;
        this.precio = precio;
        this.ocasiones = ocasiones;
        this.rangoEdad = rango_edad;
        this.talla = talla;
        this.marca = marca;
    }
  }
