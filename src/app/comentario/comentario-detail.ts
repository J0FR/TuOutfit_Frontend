import { Comentario } from './comentario';
import { Usuario } from '../usuario/usuario';
import { Outfit } from '../outfit/outfit';
import { Prenda } from '../prenda/prenda';


export class ComentarioDetail extends Comentario {
  autor: Usuario;
  outfit: Outfit;
  prenda: Prenda;

  constructor (
    titulo: string,
    calificacion: number,
    mensaje: string,
    autor: Usuario,
    outfit: Outfit,
    prenda: Prenda
  ) {
    super(titulo, calificacion, mensaje);
    this.autor = autor;
    this.outfit = outfit;
    this.prenda = prenda;
  }
}
