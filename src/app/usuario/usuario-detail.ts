import { Outfit } from '../outfit/outfit';
import { Comentario } from '../comentario/comentario';
import { Usuario } from './usuario';

export class UsuarioDetail extends Usuario {
  comentarios: Array<Comentario> = [];
  outfits_favoritos: Array<Outfit> = [];

  constructor (
    id: number,
    nombre: string,
    genero: string,
    edad: number,
    email: string,
    comentarios: Array<Comentario>,
    outfits_favoritos: Array<Outfit>
  ) {
    super(id, nombre, genero, edad, email);
    this.comentarios = comentarios;
    this.outfits_favoritos = outfits_favoritos;
  }
}
