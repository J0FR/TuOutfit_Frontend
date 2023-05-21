import { Outfit } from '../outfit/outfit';

export class Usuario {
  // FIXME: revisar tipo de genero. No es enumerado?
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
