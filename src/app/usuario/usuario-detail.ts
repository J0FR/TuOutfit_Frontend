import { OutfitDetail } from '../outfit/outfitDetail';
import { Comentario } from '../comentario/comentario';
import { Usuario } from './usuario';
import { Outfit } from '../outfit/outfit';

export class UsuarioDetail extends Usuario {
  comentarios: Array<Comentario> = [];
  outfits_favoritos: Array<Outfit> = []; // this line changed

  constructor (
    id: number,
    nombre: string,
    genero: string,
    edad: number,
    email: string,
    comentarios: Array<Comentario>,
    outfits_favoritos: Array<Outfit> // and this line changed
  ) {
    super(id, nombre, genero, edad, email);
    this.comentarios = comentarios;
    this.outfits_favoritos = outfits_favoritos;
  }
}
