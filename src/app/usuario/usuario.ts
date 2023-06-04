import { Outfit } from '../outfit/outfit';

export class Usuario {
  id: number;
  nombre: string;
  genero: string;
  edad: number;
  email: string;

  constructor (
    id: number,
    nombre: string,
    genero: string,
    edad: number,
    email: string,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.genero = genero;
    this.edad = edad;
    this.email = email;
  }
}
