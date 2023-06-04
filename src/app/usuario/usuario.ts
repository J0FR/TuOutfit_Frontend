import { Outfit } from '../outfit/outfit';

export class Usuario {
  nombre: string;
  genero: string;
  edad: number;
  email: string;

  constructor (
    nombre: string,
    genero: string,
    edad: number,
    email: string,
  ) {
    this.nombre = nombre;
    this.genero = genero;
    this.edad = edad;
    this.email = email;
  }
}
