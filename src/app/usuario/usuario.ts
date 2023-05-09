import { Outfit } from '../outfit/outfit';

export class Usuario {
  // FIXME: revisar tipo de genero. No es enumerado?
  nombre: string;
  genero: string;
  edad: number;
  email: string;
  outfits_favoritos: Outfit[];
  // FIXME: añadir comentarios


  constructor (
    nombre: string,
    genero: string,
    edad: number,
    email: string,
    outfits_favoritos: Outfit[]
  ) {
    this.nombre = nombre;
    this.genero = genero;
    this.edad = edad;
    this.email = email;
    this.outfits_favoritos = outfits_favoritos;
  }
}
